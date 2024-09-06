import { HttpClient } from './core/HttpClient';
import { ApiConfig, HttpClientConfig } from './types';

export class SenlerApiClient {
  public readonly httpClient: HttpClient;

  constructor(config: ApiConfig) {
    this.httpClient = new HttpClient(config as HttpClientConfig);
  }
}
