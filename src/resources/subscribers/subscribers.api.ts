import { HttpClient } from '../../core/HttpClient';
import { GetSubscribersRequestParams, GetSubscribersResponse } from './dto/get.dto';
import { AddSubscribersRequestParams, AddSubscribersResponse } from './dto/add.dto';
import { DelSubscriberFromSubscriptionGroupRequestParams, DelSubscriberFromSubscriptionGroupResponse } from './dto/del.dto';

export class SubscribersResource {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Getting list of subscribers.
  */
  async get(params?: GetSubscribersRequestParams): Promise<GetSubscribersResponse> {
    return await this.httpClient.get<GetSubscribersResponse>('subscribers/get', params);
  }

  /**
   * Adding a subscriber to a group of subscribers.
  */
  async add(params?: AddSubscribersRequestParams): Promise<AddSubscribersResponse> {
    return await this.httpClient.get<AddSubscribersResponse>('subscribers/add', params);
  }

  /**
   * Del a subscriber from group of subscribers.
  */
  async del(params?: DelSubscriberFromSubscriptionGroupRequestParams): Promise<DelSubscriberFromSubscriptionGroupResponse> {
    return await this.httpClient.get<DelSubscriberFromSubscriptionGroupResponse>('subscribers/del', params);
  }
}
