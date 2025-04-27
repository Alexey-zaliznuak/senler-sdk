import { RequestCacheConfig } from 'src/v2/configs';
import { HttpResource } from 'src/v2/core/abstract-http-resource';
import { ValidateData } from 'src/v2/core/validation';
import { AddSubscribersInGroupRequest, AddSubscribersInGroupRequestSchema, AddSubscribersInGroupResponse } from './dto/add.dto';
import { GetSubscribersCountResponse } from './dto/count.dto';
import { DelSubscriberFromSubscriptionGroupRequest, DelSubscriberFromSubscriptionGroupRequestSchema, DelSubscriberFromSubscriptionGroupResponse } from './dto/del.dto';
import { GetSubscribersRequest, GetSubscribersRequestSchema, GetSubscribersResponse } from './dto/get.dto';
import { GetSubscriptionsCountStatisticsRequest, GetSubscriptionsCountStatisticsRequestSchema, GetSubscriptionsCountStatisticsResponse } from './dto/statCount.dto';
import { GetSubscriptionsStatisticsRequest, GetSubscriptionsStatisticsRequestSchema, GetSubscriptionsStatisticsResponse } from './dto/statSubscribe.dto';

export class SubscribersResource extends HttpResource {
  public readonly RESOURCE_NAME = 'subscribers';

  /**
   *
   * https://help.senler.ru/senler/dev/api/methods/podpischiki/poluchenie-podpischikov
   */
  @ValidateData(GetSubscribersRequestSchema, true)
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
  @ValidateData(AddSubscribersInGroupRequestSchema)
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
  @ValidateData(GetSubscriptionsStatisticsRequestSchema)
  async getSubscriptionsStatistics(data: GetSubscriptionsStatisticsRequest, cacheConfig?: RequestCacheConfig): Promise<GetSubscriptionsStatisticsResponse> {
    return await this.httpClient.request<GetSubscriptionsStatisticsResponse>(`${this.RESOURCE_NAME}/statSubscribe`, data, cacheConfig);
  }

  /**
   * Statistics on count of registration and cancellation of subscriptions.
   *
   * https://help.senler.ru/senler/dev/api/methods/podpischiki/statcount
   */
  @ValidateData(GetSubscriptionsCountStatisticsRequestSchema)
  async getSubscriptionsCountStatistics(data: GetSubscriptionsCountStatisticsRequest, cacheConfig?: RequestCacheConfig): Promise<GetSubscriptionsCountStatisticsResponse> {
    return await this.httpClient.request<GetSubscriptionsCountStatisticsResponse>(`${this.RESOURCE_NAME}/statCount`, data, cacheConfig);
  }
}
