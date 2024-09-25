import { HttpClient } from '../../core/http-client';
import { GetSubscribersRequest, GetSubscribersResponse } from './dto/get.dto';
import { AddSubscribersInGroupRequest, AddSubscribersInGroupResponse } from './dto/add.dto';
import { DelSubscriberFromSubscriptionGroupRequest, DelSubscriberFromSubscriptionGroupResponse } from './dto/del.dto';
import { GetSubscriptionsStatisticsRequest, GetSubscriptionsStatisticResponse } from './dto/statSubscribe.dto';
import { GetSubscriptionsCountStatisticResponse, GetSubscriptionsCountStatisticsRequest } from './dto/statCount.dto';
import { GetSubscribersCountResponse } from './dto/count.dto';

export class SubscribersResource {
  private httpClient: HttpClient;

  public readonly RESOURCE_NAME = 'subscribers';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Getting list of subscribers.
   *
   * https://help.senler.ru/senler/dev/api/methods/podpischiki/poluchenie-podpischikov
   */
  async get(params?: GetSubscribersRequest): Promise<GetSubscribersResponse> {
    return await this.httpClient.request<GetSubscribersResponse>(`${this.RESOURCE_NAME}/get`, params);
  }

  /** Get count of subscribers */
  async count(): Promise<number> {
    const result = await this.httpClient.request<GetSubscribersCountResponse>(`${this.RESOURCE_NAME}/count`);
    return result.count;
  }

  /**
   * Adding a subscriber to a group of subscribers.
   *
   * Error does not appear when trying to add an existing user.
   *
   * https://help.senler.ru/senler/dev/api/methods/podpischiki/dobavlenie-podpischika
   */
  async addInGroup(params: AddSubscribersInGroupRequest): Promise<AddSubscribersInGroupResponse> {
    return await this.httpClient.request<AddSubscribersInGroupResponse>(`${this.RESOURCE_NAME}/add`, params);
  }

  /**
   * Del a subscriber from group of subscribers.
   *
   * Error does not appear when trying to del already deleted user.
   *
   * https://help.senler.ru/senler/dev/api/methods/podpischiki/udalenie-podpischika
   */
  async delFromGroup(params: DelSubscriberFromSubscriptionGroupRequest): Promise<DelSubscriberFromSubscriptionGroupResponse> {
    return await this.httpClient.request<DelSubscriberFromSubscriptionGroupResponse>(`${this.RESOURCE_NAME}/del`, params);
  }

  /**
   * Statistics on registration and cancellation of subscriptions.
   *
   * https://help.senler.ru/senler/dev/api/methods/podpischiki/statistika-podpisok
   */
  async getSubscriptionsStatistics(params: GetSubscriptionsStatisticsRequest): Promise<GetSubscriptionsStatisticResponse> {
    return await this.httpClient.request<GetSubscriptionsStatisticResponse>(`${this.RESOURCE_NAME}/statSubscribe`, params);
  }

  /**
   * Statistics on count of registration and cancellation of subscriptions.
   *
   * https://help.senler.ru/senler/dev/api/methods/podpischiki/statcount
   */
  async getSubscriptionsCountStatistics(params: GetSubscriptionsCountStatisticsRequest): Promise<GetSubscriptionsCountStatisticResponse> {
    return await this.httpClient.request<GetSubscriptionsCountStatisticResponse>(`${this.RESOURCE_NAME}/statCount`, params);
  }
}
