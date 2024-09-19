import { HttpClient } from '../../core/HttpClient';
import { AddSubscribersGroupRequest, AddSubscribersGroupResponse } from './dto/add.dto';
import { DelSubscribersGroupRequest, DelSubscribersGroupResponse } from './dto/del.dto';
import { EditSubscribersGroupRequest, EditSubscribersGroupResponse } from './dto/edit.dto';
import { GetSubscribersGroupsRequest, GetSubscribersGroupsResponse } from './dto/get.dto';

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
  async get(data?: GetSubscribersGroupsRequest): Promise<GetSubscribersGroupsResponse> {
    return await this.httpClient.request<GetSubscribersGroupsResponse>(`${this.RESOURCE_NAME}/get`, data);
  }

  /**
   * Add subscribers group.
   *
   * https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/dobavlenie-gruppy-podpischikov
   */
  async add(data: AddSubscribersGroupRequest): Promise<AddSubscribersGroupResponse> {
    return await this.httpClient.request<AddSubscribersGroupResponse>(`${this.RESOURCE_NAME}/add`, data);
  }

  /**
   * Edit subscribers group.
   *
   * https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/redaktirovanie-gruppy-podpischikov
   */
  async edit(data: EditSubscribersGroupRequest): Promise<EditSubscribersGroupResponse> {
    return await this.httpClient.request<EditSubscribersGroupResponse>(`${this.RESOURCE_NAME}/edit`, data);
  }

  /**
   * Del subscribers group.
   *
   * https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/udalenie-gruppy-podpischikov
   */
  async del(data: DelSubscribersGroupRequest): Promise<DelSubscribersGroupResponse> {
    return await this.httpClient.request<DelSubscribersGroupResponse>(`${this.RESOURCE_NAME}/del`, data);
  }
}
