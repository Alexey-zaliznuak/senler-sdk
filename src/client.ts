import { BASE_LOGGING_CONFIG } from './configs';
import { HttpClient } from './core/http-client';
import { ApiConfig, LoggingConfig } from './core/http-client/client.dto';
import { BotsResource } from './resources/bots/bots.api';
import { DeliveriesResource } from './resources/deliveries/deliveries.api';
import { GlobalVarsResource } from './resources/globalVars/globalVars.api';
import { SubscribersResource } from './resources/subscribers/subscribers.api';
import { SubscribersGroupsResource } from './resources/subscriptions/subscription.api';
import { UtmsResource } from './resources/utms/utms.api';
import { CacheConfig } from './core/http-client/cache';
import { VarsResource } from './resources/vars/var.api';
import { RetryConfig } from './core/http-client/client.config';

export interface ApiClientConfig extends ApiConfig {}

export class SenlerApiClient {
  public readonly httpClient: HttpClient;

  public readonly subscribers: SubscribersResource;
  public readonly subscribersGroups: SubscribersGroupsResource;
  public readonly utms: UtmsResource;
  public readonly deliveries: DeliveriesResource;
  public readonly bots: BotsResource;
  public readonly vars: VarsResource;
  public readonly globalVars: GlobalVarsResource;

  constructor(apiConfig: ApiClientConfig, loggingConfig?: LoggingConfig, retryConfig?: RetryConfig, cacheConfig?: CacheConfig) {
    loggingConfig = Object.assign(BASE_LOGGING_CONFIG, loggingConfig);

    this.httpClient = new HttpClient(apiConfig, loggingConfig, retryConfig, cacheConfig);

    this.subscribers = new SubscribersResource(this.httpClient);
    this.subscribersGroups = new SubscribersGroupsResource(this.httpClient);
    this.utms = new UtmsResource(this.httpClient);
    this.deliveries = new DeliveriesResource(this.httpClient);
    this.bots = new BotsResource(this.httpClient);
    this.vars = new VarsResource(this.httpClient);
    this.globalVars = new GlobalVarsResource(this.httpClient);
  }
}
