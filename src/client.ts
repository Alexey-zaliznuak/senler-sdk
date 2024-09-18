import { HttpClient, HttpClientConfig } from './core/HttpClient';
import { SubscribersResource } from './resources/subscribers/subscribers.api';
import { SubscriptionsResource } from './resources/subscriptions/subscriptions.api';
import { UtmsResource } from './resources/utms/utms.api'

export interface ApiClientConfig extends HttpClientConfig {}

export class SenlerApiClient {
  public readonly httpClient: HttpClient;

  public readonly subscribers: SubscribersResource;
  public readonly subscriptions: SubscriptionsResource;
  public readonly utms: UtmsResource;

  constructor(config: ApiClientConfig) {
    this.httpClient = new HttpClient(config as HttpClientConfig);

    this.subscribers = new SubscribersResource(this.httpClient);
    this.subscriptions = new SubscriptionsResource(this.httpClient);
    this.utms = new UtmsResource(this.httpClient);
  }
}
