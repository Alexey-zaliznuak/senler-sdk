import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { handleApiError } from '../response/handle-api-error';
import { clearResponse } from '../response/clear-response';
import pino, { Logger } from 'pino';
import axiosRetry from 'axios-retry';
import { ApiConfig, CustomAxiosRequestConfig, LoggingConfig } from './client.dto';
import { BASE_RETRY_CONFIG, RetryConfig } from './client.config';
import { CacheConfig } from './cache';
import { KeyBuilder } from './cache/key-builder';
import { BASE_API_CONFIG, BASE_LOGGING_CONFIG } from '../../configs';
import { RequestCacheConfig } from './cache/cache.dto';

export class HttpClient {
  private client: AxiosInstance;
  private logger: Logger;

  private readonly axiosRetryConfig: RetryConfig;
  private readonly apiConfig: ApiConfig;
  private readonly cacheConfig: CacheConfig;

  constructor(apiConfig: ApiConfig, loggingConfig?: LoggingConfig, axiosRetryConfig?: RetryConfig, cacheConfig?: CacheConfig) {
    this.apiConfig = Object.assign(BASE_API_CONFIG, apiConfig);
    this.cacheConfig = cacheConfig ?? { enabled: false };
    this.axiosRetryConfig = this._buildRetryConfig(axiosRetryConfig);

    this.logger = this._createLogger(loggingConfig);
    this.client = this._createAxiosClient();
  }

  @clearResponse
  @handleApiError
  async request<T>(url: string, data?: AxiosRequestConfig['params'], cacheConfig?: RequestCacheConfig): Promise<T> {
    const requestId = this.__generateRequestId();
    const logger = this._createChildRequestLogger(url, requestId);

    cacheConfig = Object.assign(this.cacheConfig, cacheConfig);

    const cachedData = await this._getCachedData<T>(url, data, cacheConfig, requestId);
    if (cachedData) {
      logger.info({ requestData: data, cachedData }, 'Return cached response');
      return cachedData;
    }

    logger.info({ data }, 'Send request');

    try {
      const response: AxiosResponse<T> = await this.client.postForm<T>(url, data, { requestId } as CustomAxiosRequestConfig);

      logger.info({ code: response.status, data: response.data }, 'Received response');

      await this._saveCacheIfNeed(url, data, response.data, cacheConfig, requestId);

      return response.data;
    } catch (error) {
      this.__logError(error, url, data, logger);
      throw error;
    }
  }

  private async _getCachedData<T>(url: string, data?: AxiosRequestConfig['params'], cacheConfig?: CacheConfig, requestId?: string): Promise<T | null> {
    if (!cacheConfig?.enabled || (cacheConfig.enabled && !cacheConfig.manager)) return null;

    const logger = this._createChildRequestLogger(url, requestId || 'unknown');

    logger.debug('Checking cache');

    const key = KeyBuilder.buildKey(url, { data }, this.client);

    const cache = await cacheConfig.manager!.get<T>(key);

    if (!cache) {
      logger.debug({ key }, 'No cache found:');
      return null;
    }

    logger.debug({ key, cache }, 'Found cache:');
    return cache;
  }

  private async _saveCacheIfNeed(
    url: string,
    requestData: AxiosRequestConfig['params'],
    responseData: AxiosResponse['data'],
    requestCacheConfig?: RequestCacheConfig,
    requestId?: string
  ): Promise<void> {
    if (!requestCacheConfig?.enabled || (requestCacheConfig.enabled && !requestCacheConfig.manager)) return;
    if (!responseData.success) return;

    const logger = this._createChildRequestLogger(url, requestId || 'unknown');

    const key = KeyBuilder.buildKey(url, { data: requestData }, this.client);

    await requestCacheConfig.manager!.set(key, responseData, requestCacheConfig.ttl);

    logger.debug({ key, requestCacheConfig, data: responseData }, 'Set cache');
  }

  private _createAxiosClient(): AxiosInstance {
    const axiosConfig: AxiosRequestConfig = {
      baseURL: this.apiConfig.baseUrl,
      params: {
        access_token: this.apiConfig.accessToken,
        vk_group_id: this.apiConfig.vkGroupId,
        v: this.apiConfig.apiVersion
      }
    };

    this.logger.debug({ axiosConfig, axiosRetryConfig: this.axiosRetryConfig }, 'Create axios client:');

    const instance = axios.create(axiosConfig);

    axiosRetry(instance, this.axiosRetryConfig);

    return instance;
  }

  private _createLogger(loggingConfig?: LoggingConfig): Logger {
    loggingConfig = Object.assign(BASE_LOGGING_CONFIG, loggingConfig);

    const { destination, ...loggerOptions } = loggingConfig;

    return pino(loggerOptions, destination);
  }

  private _createChildRequestLogger(endpoint: string, requestId: string): Logger {
    return this.logger.child({ endpoint, requestId });
  }

  private _buildRetryConfig(axiosRetryConfig?: RetryConfig): RetryConfig {
    axiosRetryConfig = Object.assign(BASE_RETRY_CONFIG, axiosRetryConfig);
    return this._appendLoggingOnRetry(axiosRetryConfig);
  }

  private _appendLoggingOnRetry(oldRetryConfig: RetryConfig): RetryConfig {
    const axiosRetryConfig: RetryConfig = {
      ...oldRetryConfig,

      onRetry: async (retryCount: number, error: AxiosError, requestConfig: AxiosRequestConfig): Promise<void> => {
        if (oldRetryConfig.onRetry) await oldRetryConfig.onRetry(retryCount, error, requestConfig);

        this.__logRetrying(retryCount, error, requestConfig);
      }
    };
    return axiosRetryConfig;
  }

  private __logError(error: unknown | Error | AxiosError, url: string, data: any, logger: Logger): void {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error({ url, data, error }, `Failed request: ${errorMessage}`);
  }

  private __logRetrying(retryCount: number, error: AxiosError, requestConfig: AxiosRequestConfig): void {
    const logger = this._createChildRequestLogger((requestConfig as CustomAxiosRequestConfig).url, (requestConfig as CustomAxiosRequestConfig).requestId);
    logger.warn({ requestConfig }, `Request ${retryCount} attempt failed, error: ${error.message}`);
  }

  private __generateRequestId = (): string =>
    Math.random()
      .toString(16)
      .slice(2);
}
