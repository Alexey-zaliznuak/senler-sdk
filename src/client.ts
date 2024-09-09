import { HttpClient, HttpClientConfig } from './core/HttpClient';
import { SubscribersResource } from './resources/subscribers/subscribers.api';


export interface ApiClientConfig extends HttpClientConfig {}


export class SenlerApiClient {
  public readonly httpClient: HttpClient;
  public readonly subscribers: SubscribersResource;

  constructor(config: ApiClientConfig) {
    this.httpClient = new HttpClient(config as HttpClientConfig);

    this.subscribers = new SubscribersResource(this.httpClient);
  }
}
