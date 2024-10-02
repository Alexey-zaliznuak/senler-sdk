import { HttpClient } from '../../core/http-client';
import { AddSubscribersInGroupRequest, AddSubscribersInGroupResponse } from './dto/add.dto';
import { GetSubscribersCountResponse } from './dto/count.dto';
import { DelSubscriberFromSubscriptionGroupRequest, DelSubscriberFromSubscriptionGroupResponse } from './dto/del.dto';
import { GetSubscribersRequest, GetSubscribersResponse } from './dto/get.dto';
import { GetSubscriptionsCountStatisticRequest, GetSubscriptionsCountStatisticResponse } from './dto/statCount.dto';
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
  async get(data?: GetSubscribersRequest): Promise<GetSubscribersResponse> {
    return await this.httpClient.request<GetSubscribersResponse>(`${this.RESOURCE_NAME}/get`, data);
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
  async addInGroup(data: AddSubscribersInGroupRequest): Promise<AddSubscribersInGroupResponse> {
    return await this.httpClient.request<AddSubscribersInGroupResponse>(`${this.RESOURCE_NAME}/add`, data);
  }

  /**
   * Del a subscriber from group of subscribers.
   *
   * Error does not appear when trying to del already deleted user.
   *
   * https://help.senler.ru/senler/dev/api/methods/podpischiki/udalenie-podpischika
   */
  async delFromGroup(data: DelSubscriberFromSubscriptionGroupRequest): Promise<DelSubscriberFromSubscriptionGroupResponse> {
    return await this.httpClient.request<DelSubscriberFromSubscriptionGroupResponse>(`${this.RESOURCE_NAME}/del`, data);
  }

  /**
   * Statistics on registration and cancellation of subscriptions.
   *
   * https://help.senler.ru/senler/dev/api/methods/podpischiki/statistika-podpisok
   */
  async getSubscriptionsStatistics(data: GetSubscriptionsStatisticsRequest): Promise<GetSubscriptionsStatisticResponse> {
    return await this.httpClient.request<GetSubscriptionsStatisticResponse>(`${this.RESOURCE_NAME}/statSubscribe`, data);
  }

  /**
   * Statistics on count of registration and cancellation of subscriptions.
   *
   * https://help.senler.ru/senler/dev/api/methods/podpischiki/statcount
   */
  async getSubscriptionsCountStatistics(data: GetSubscriptionsCountStatisticRequest): Promise<GetSubscriptionsCountStatisticResponse> {
    return await this.httpClient.request<GetSubscriptionsCountStatisticResponse>(`${this.RESOURCE_NAME}/statCount`, data);
  }
}
