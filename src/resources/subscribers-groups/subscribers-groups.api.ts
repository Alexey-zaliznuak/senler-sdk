import { HttpClient } from '../../core/HttpClient';
import { AddSubscribersGroupRequest, AddSubscribersGroupResponse } from './dto/add.dto';
import { GetSubscribersGroupsRequestParams, GetSubscribersGroupsResponse } from './dto/get.dto';


export class SubscribersGroupsResource {
  private httpClient: HttpClient;

  public readonly RESOURCE_NAME = 'subscriptions';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Getting list of subscribers groups.
   *
   * https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/poluchenie-spiska-grupp-podpischikov
   */
  async get(params?: GetSubscribersGroupsRequestParams): Promise<GetSubscribersGroupsResponse> {
    return await this.httpClient.request<GetSubscribersGroupsResponse>(`${this.RESOURCE_NAME}/get`, params);
  }

  /**
   * Add subscribers group.
   *
   * https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/dobavlenie-gruppy-podpischikov
   */
  async add(data: AddSubscribersGroupRequest): Promise<AddSubscribersGroupResponse> {
    return await this.httpClient.request<AddSubscribersGroupResponse>(`${this.RESOURCE_NAME}/add`, data);
  }
}
