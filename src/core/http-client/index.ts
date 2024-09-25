import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { handleApiError } from '../response/handle-api-error';
import { clearResponse } from '../response/clear-response';
import pino, { Logger } from 'pino';
import axiosRetry, { IAxiosRetryConfig as AxiosRetryConfig } from 'axios-retry';
import { ApiConfig, CustomAxiosRequestConfig, LoggingConfig } from './client.dto';
import { BASE_AXIOS_RETRY_CONFIG } from './client.config';
import { BASE_API_CONFIG, BASE_LOGGING_CONFIG } from '../../constants';

export class HttpClient {
  private client: AxiosInstance;
  private logger: Logger;

  private readonly axiosRetryConfig: AxiosRetryConfig;
  private readonly apiConfig: ApiConfig;

  constructor(apiConfig: ApiConfig, axiosRetryConfig?: AxiosRetryConfig, loggingConfig?: LoggingConfig) {
    this.apiConfig = Object.assign(BASE_API_CONFIG, apiConfig);
    this.axiosRetryConfig = this._buildAxiosRetryConfig(axiosRetryConfig);

    this.logger = this._createLogger(loggingConfig);
    this.client = this._createAxiosClient();
  }

  @clearResponse
  @handleApiError
  async request<T>(url: string, data?: AxiosRequestConfig['params']): Promise<T> {
    const requestId = this.__generateRequestId();
    const logger = this._createChildRequestLogger(url, requestId);

    logger.info({ data }, 'Send request');

    try {
      const response: AxiosResponse<T, CustomAxiosRequestConfig> = await this.client.postForm<T>(url, data, { requestId } as CustomAxiosRequestConfig);

      logger.info({ code: response.status, data: response.data }, 'Received response');

      return response.data;
    } catch (error) {
      this.__logError(error, url, data, logger);

      throw error;
    }
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

  private _buildAxiosRetryConfig(axiosRetryConfig?: AxiosRetryConfig): AxiosRetryConfig {
    axiosRetryConfig = Object.assign(BASE_AXIOS_RETRY_CONFIG, axiosRetryConfig);
    return this._appendLoggingOnRetry(axiosRetryConfig);
  }

  private _appendLoggingOnRetry(oldAxiosRetryConfig: AxiosRetryConfig): AxiosRetryConfig {
    const axiosRetryConfig: AxiosRetryConfig = {
      ...oldAxiosRetryConfig,

      onRetry: async (retryCount: number, error: AxiosError, requestConfig: AxiosRequestConfig): Promise<void> => {
        if (oldAxiosRetryConfig.onRetry) await oldAxiosRetryConfig.onRetry(retryCount, error, requestConfig);

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
