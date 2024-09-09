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

  constructor(config: HttpClientConfig) {
    config.baseURL = config.baseURL || API_BASE_URL;
    config.apiVersion = config.apiVersion || DEFAULT_API_VERSION;

    this.client = axios.create({
      baseURL: config.baseURL,
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        access_token: config.accessToken,
        vk_group_id: config.vkGroupId,
        v: config.apiVersion
      }
    });
  }

  @handleApiError
  @clearResponse
  async get<T>(url: string, params?: AxiosRequestConfig['params']): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.client.get(url, { params });
      return response.data;
    } catch (error) {
      throw new Error(`GET request failed: ${(error as Error).message}`);
    }
  }

  // async post<T>(url: string, data?: Record<string, QueryParams>): Promise<T> {
  //   try {
  //     const response: AxiosResponse<T> = await this.client.post(url, data);
  //     return response.data;
  //   } catch (error) {
  //     throw new Error(`POST request failed: ${(error as Error).message}`);
  //   }
  // }
}
