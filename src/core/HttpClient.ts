import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults } from 'axios';
import { API_BASE_URL, DEFAULT_API_VERSION } from '../constants';
import { handleApiError } from './response/handle-api-error';
import { clearResponse } from './response/clear-response';
import pino, { DestinationStream, Logger, LoggerOptions } from 'pino';

export interface HttpClientConfig {
  apiVersion?: string;
  baseURL?: string;
  accessToken: string;
  vkGroupId: string;
}

export interface LoggingConfig extends LoggerOptions {
  destination?: DestinationStream;
}

export class HttpClient {
  private client: AxiosInstance;
  private logger: Logger;

  private readonly _accessToken: string;
  private readonly _baseUrl: string;
  private readonly _apiVersion: string;
  private readonly _vkGroupId: string;

  constructor(config: HttpClientConfig, loggingConfig?: LoggingConfig) {
    this._accessToken = config.accessToken;
    this._vkGroupId = config.vkGroupId;
    this._baseUrl = config.baseURL || API_BASE_URL;
    this._apiVersion = config.apiVersion || DEFAULT_API_VERSION;

    this.logger = this._createLogger(loggingConfig);
    this.client = this._createAxiosClient();
  }

  @clearResponse
  @handleApiError
  async request<T>(url: string, data?: AxiosRequestConfig['params']): Promise<T> {
    const logger = this._createChildRequestLogger(url);

    logger.info({ data }, 'Send request');

    try {
      const response: AxiosResponse<T> = await this.client.postForm(url, data);

      logger.info({ data: response.data }, 'Received response');

      return response.data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';

      logger.error({ url, data, error }, `Failed request: ${errorMessage}`);

      throw new Error(`Request failed: ${errorMessage}`);
    }
  }

  private _createAxiosClient(): AxiosInstance {
    const axiosConfig: CreateAxiosDefaults = {
      baseURL: this._baseUrl,
      params: {
        access_token: this._accessToken,
        vk_group_id: this._vkGroupId,
        v: this._apiVersion
      }
    };

    this.logger.debug({ axiosConfig }, 'Create axios client:');

    return axios.create(axiosConfig);
  }

  private _createLogger(loggingConfig?: LoggingConfig): Logger {
    if (!loggingConfig) {
      return pino({
        level: 'error',
        base: { pid: false },
        timestamp: pino.stdTimeFunctions.isoTime
      });
    }

    const { destination, ...loggerOptions } = loggingConfig;

    return pino(loggerOptions, destination);
  }

  private _createChildRequestLogger(endpoint: string): Logger {
    return this.logger.child({ endpoint, requestId: this._generateRequestId() });
  }

  private _generateRequestId = (): string =>
    Math.random()
      .toString(16)
      .slice(2);
}
