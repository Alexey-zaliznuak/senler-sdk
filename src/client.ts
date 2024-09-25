import { IAxiosRetryConfig as AxiosRetryConfig } from 'axios-retry';
import { HttpClient } from './core/http-client';
import { BotsResource } from './resources/bots/deliveries.api';
import { DeliveriesResource } from './resources/deliveries/deliveries.api';
import { SubscribersResource } from './resources/subscribers/subscribers.api';
import { SubscribersGroupsResource } from './resources/subscriptions/subscription.api';
import { UtmsResource } from './resources/utms/utms.api';
import { ApiConfig, LoggingConfig } from './core/http-client/client.dto';
import { BASE_LOGGING_CONFIG } from './constants';

export interface ApiClientConfig extends ApiConfig {}

export class SenlerApiClient {
  public readonly httpClient: HttpClient;

  public readonly subscribers: SubscribersResource;
  public readonly subscribersGroups: SubscribersGroupsResource;
  public readonly utms: UtmsResource;
  public readonly deliveries: DeliveriesResource;
  public readonly bots: BotsResource;

  constructor(
    apiConfig: ApiClientConfig,
    retryConfig?: AxiosRetryConfig,
    loggingConfig?: LoggingConfig,
  ) {
    loggingConfig = Object.assign(BASE_LOGGING_CONFIG, loggingConfig)

    this.httpClient = new HttpClient(apiConfig, retryConfig, loggingConfig);

    this.subscribers = new SubscribersResource(this.httpClient);
    this.subscribersGroups = new SubscribersGroupsResource(this.httpClient);
    this.utms = new UtmsResource(this.httpClient);
    this.deliveries = new DeliveriesResource(this.httpClient);
    this.bots = new BotsResource(this.httpClient);
  }
}
