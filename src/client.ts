import { HttpClient, HttpClientConfig, LoggingConfig } from './core/HttpClient';
import { SubscribersResource } from './resources/subscribers/subscribers.api';
import { SubscribersGroupsResource } from './resources/subscriptions/subscription.api';
import { UtmsResource } from './resources/utms/utms.api';

export interface ApiClientConfig extends HttpClientConfig {}

export class SenlerApiClient {
  public readonly httpClient: HttpClient;

  public readonly subscribers: SubscribersResource;
  public readonly subscribersGroups: SubscribersGroupsResource;
  public readonly utms: UtmsResource;

  constructor(config: ApiClientConfig, loggingConfig?: LoggingConfig) {
    this.httpClient = new HttpClient(config as HttpClientConfig, loggingConfig);

    this.subscribers = new SubscribersResource(this.httpClient);
    this.subscribersGroups = new SubscribersGroupsResource(this.httpClient);
    this.utms = new UtmsResource(this.httpClient);
  }
}
