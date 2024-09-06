import { HttpClient, HttpClientConfig } from './core/HttpClient';

export interface ApiClientConfig extends HttpClientConfig {}

export class SenlerApiClient {
  public readonly httpClient: HttpClient;

  constructor(config: ApiClientConfig) {
    this.httpClient = new HttpClient(config as HttpClientConfig);
  }
}
