import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { HttpClientConfig, QueryParams } from '../types';
import { API_BASE_URL, DEFAULT_API_VERSION } from '../constants';

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

  async get<T>(url: string, params?: Record<string, QueryParams>): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.client.get(url, { params });
      return response.data;
    } catch (error) {
      throw new Error(`GET request failed: ${(error as Error).message}`);
    }
  }

  async post<T>(url: string, data?: Record<string, QueryParams>): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.client.post(url, data);
      return response.data;
    } catch (error) {
      throw new Error(`POST request failed: ${(error as Error).message}`);
    }
  }
}
