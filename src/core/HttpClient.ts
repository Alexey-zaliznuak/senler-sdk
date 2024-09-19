import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_BASE_URL, DEFAULT_API_VERSION } from '../constants';
import { handleApiError } from './response/handle-api-error';
import { clearResponse } from './response/clear-response';

export interface HttpClientConfig {
  apiVersion?: string;
  baseURL?: string;
  accessToken: string;
  vkGroupId: string;
}

export class HttpClient {
  private client: AxiosInstance;

  private readonly _accessToken: string;
  private readonly _baseUrl: string;
  private readonly _apiVersion: string;
  private readonly _vkGroupId: string;

  constructor(config: HttpClientConfig) {
    this._accessToken = config.accessToken;
    this._vkGroupId = config.vkGroupId;
    this._baseUrl = config.baseURL || API_BASE_URL;
    this._apiVersion = config.apiVersion || DEFAULT_API_VERSION;

    this.client = this._createAxiosClient();
  }

  @clearResponse
  @handleApiError
  async request<T>(url: string, data?: AxiosRequestConfig['params']): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.client.post(url, data);
      return response.data;
    } catch (error) {
      throw new Error(`Request failed: ${(error as Error).message}`);
    }
  }

  get baseUrl(): string {
    return this._baseUrl;
  }

  get apiVersion(): string {
    return this._apiVersion;
  }

  private _createAxiosClient(): AxiosInstance {
    return axios.create({
      baseURL: this._baseUrl,
      headers: {
        'Content-Type': 'multipart/form-data.'
      },
      params: {
        access_token: this._accessToken,
        vk_group_id: this._vkGroupId,
        v: this._apiVersion
      }
    });
  }
}
