import { HttpClient } from '../../core/HttpClient';
import { GetSubscribersRequestParams, GetSubscribersResponse } from './dto/get.dto';
import { AddSubscribersInGroupRequestParams, AddSubscribersInGroupResponse } from './dto/add.dto';
import { DelSubscriberFromSubscriptionGroupRequestParams, DelSubscriberFromSubscriptionGroupResponse } from './dto/del.dto';
import { GetSubscriptionsStatisticsRequestParams, GetSubscriptionsStatisticResponse } from './dto/statSubscribe.dto'
import { GetSubscriptionsCountStatisticResponse, GetSubscriptionsCountStatisticsRequestParams } from './dto/statCount.dto';


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
  async get(params?: GetSubscribersRequestParams): Promise<GetSubscribersResponse> {
    return await this.httpClient.get<GetSubscribersResponse>(`${this.RESOURCE_NAME}/get`, params);
  }

  /**
   * Adding a subscriber to a group of subscribers.
   *
   * Error does not appear when trying to add an existing user.
   *
   * https://help.senler.ru/senler/dev/api/methods/podpischiki/dobavlenie-podpischika
   */
  async addInGroup(params?: AddSubscribersInGroupRequestParams): Promise<AddSubscribersInGroupResponse> {
    return await this.httpClient.get<AddSubscribersInGroupResponse>(`${this.RESOURCE_NAME}/add`, params);
  }

  /**
   * Del a subscriber from group of subscribers.
   *
   * Error does not appear when trying to del already deleted user.
   *
   * https://help.senler.ru/senler/dev/api/methods/podpischiki/udalenie-podpischika
   */
  async delFromGroup(params?: DelSubscriberFromSubscriptionGroupRequestParams): Promise<DelSubscriberFromSubscriptionGroupResponse> {
    return await this.httpClient.get<DelSubscriberFromSubscriptionGroupResponse>(`${this.RESOURCE_NAME}/del`, params);
  }

  /**
   * Statistics on registration and cancellation of subscriptions.
   *
   * https://help.senler.ru/senler/dev/api/methods/podpischiki/statistika-podpisok
   */
  async getSubscriptionsStatistics(params: GetSubscriptionsStatisticsRequestParams): Promise<GetSubscriptionsStatisticResponse> {
    return await this.httpClient.get<GetSubscriptionsStatisticResponse>(`${this.RESOURCE_NAME}/statSubscribe`, params);
  }

  /**
   * Statistics on count of registration and cancellation of subscriptions.
   *
   * https://help.senler.ru/senler/dev/api/methods/podpischiki/statcount
   */
  async getSubscriptionsCountStatistics(params: GetSubscriptionsCountStatisticsRequestParams): Promise<GetSubscriptionsCountStatisticResponse> {
    return await this.httpClient.get<GetSubscriptionsCountStatisticResponse>(`${this.RESOURCE_NAME}/statCount`, params);
  }
}
