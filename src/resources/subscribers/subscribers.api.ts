import { RequestCacheConfig } from 'src/configs';
import { ValidateData } from 'src/core/validation';
import { HttpClient } from '../../core/http-client';
import { AddSubscribersInGroupRequest, AddSubscribersInGroupResponse } from './dto/add.dto';
import { GetSubscribersCountResponse } from './dto/count.dto';
import { DelSubscriberFromSubscriptionGroupRequest, DelSubscriberFromSubscriptionGroupRequestSchema, DelSubscriberFromSubscriptionGroupResponse } from './dto/del.dto';
import { GetSubscribersRequest, GetSubscribersRequestSchema, GetSubscribersResponse } from './dto/get.dto';
import { GetSubscriptionsCountStatisticResponse, GetSubscriptionsCountStatisticsRequest } from './dto/statCount.dto';
import { GetSubscriptionsStatisticResponse, GetSubscriptionsStatisticsRequest } from './dto/statSubscribe.dto';

export class SubscribersResource {
  private httpClient: HttpClient;

  public readonly RESOURCE_NAME = 'subscribers';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   *
   * https://help.senler.ru/senler/dev/api/methods/podpischiki/poluchenie-podpischikov
   */
  @ValidateData(GetSubscribersRequestSchema, false)
  async get(data?: GetSubscribersRequest, cacheConfig?: RequestCacheConfig): Promise<GetSubscribersResponse> {
    return await this.httpClient.request<GetSubscribersResponse>(`${this.RESOURCE_NAME}/get`, data, cacheConfig);
  }

  /** Get count of subscribers */
  async count(cacheConfig?: RequestCacheConfig): Promise<number> {
    const result = await this.httpClient.request<GetSubscribersCountResponse>(`${this.RESOURCE_NAME}/count`, null, cacheConfig);
    return result.count;
  }

  /**
   * Adding a subscriber to a group of subscribers.
   *
   * Error does not appear when trying to add an existing user.
   *
   * https://help.senler.ru/senler/dev/api/methods/podpischiki/dobavlenie-podpischika
   */
  async addInGroup(data: AddSubscribersInGroupRequest, cacheConfig: RequestCacheConfig = { enabled: false }): Promise<AddSubscribersInGroupResponse> {
    return await this.httpClient.request<AddSubscribersInGroupResponse>(`${this.RESOURCE_NAME}/add`, data, cacheConfig);
  }

  /**
   * Del a subscriber from group of subscribers.
   *
   * Error does not appear when trying to del already deleted user.
   *
   * https://help.senler.ru/senler/dev/api/methods/podpischiki/udalenie-podpischika
   */
  @ValidateData(DelSubscriberFromSubscriptionGroupRequestSchema)
  async delFromGroup(data: DelSubscriberFromSubscriptionGroupRequest, cacheConfig: RequestCacheConfig = { enabled: false }): Promise<DelSubscriberFromSubscriptionGroupResponse> {
    return await this.httpClient.request<DelSubscriberFromSubscriptionGroupResponse>(`${this.RESOURCE_NAME}/del`, data, cacheConfig);
  }

  /**
   * Statistics on registration and cancellation of subscriptions.
   *
   * https://help.senler.ru/senler/dev/api/methods/podpischiki/statistika-podpisok
   */
  async getSubscriptionsStatistics(data: GetSubscriptionsStatisticsRequest, cacheConfig?: RequestCacheConfig): Promise<GetSubscriptionsStatisticResponse> {
    return await this.httpClient.request<GetSubscriptionsStatisticResponse>(`${this.RESOURCE_NAME}/statSubscribe`, data, cacheConfig);
  }

  /**
   * Statistics on count of registration and cancellation of subscriptions.
   *
   * https://help.senler.ru/senler/dev/api/methods/podpischiki/statcount
   */
  async getSubscriptionsCountStatistics(data: GetSubscriptionsCountStatisticsRequest, cacheConfig?: RequestCacheConfig): Promise<GetSubscriptionsCountStatisticResponse> {
    return await this.httpClient.request<GetSubscriptionsCountStatisticResponse>(`${this.RESOURCE_NAME}/statCount`, data, cacheConfig);
  }
}
