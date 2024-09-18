import { HttpClient } from '../../core/HttpClient';
import { AddSubscriptionRequestParams, AddSubscriptionsResponse } from './dto/add.dto';
import { GetSubscriptionsRequestParams, GetSubscriptionsResponse } from './dto/get.dto';


export class SubscriptionsResource {
  private httpClient: HttpClient;

  public readonly RESOURCE_NAME = 'subscriptions';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Getting list of subscriptions.
   *
   * https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/poluchenie-spiska-grupp-podpischikov
   */
  async get(params?: GetSubscriptionsRequestParams): Promise<GetSubscriptionsResponse> {
    return await this.httpClient.get<GetSubscriptionsResponse>(`${this.RESOURCE_NAME}/get`, params);
  }

  /**
   * Getting list of subscriptions.
   *
   * https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/dobavlenie-gruppy-podpischikov
   */
  async add(params: AddSubscriptionRequestParams): Promise<AddSubscriptionsResponse> {
    return await this.httpClient.get<AddSubscriptionsResponse>(`${this.RESOURCE_NAME}/add`, params);
  }
}
