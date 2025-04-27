import { RequestCacheConfig } from 'src/v2/configs';
import { HttpResource } from 'src/v2/core/abstract-http-resource';
import { ValidateData } from 'src/v2/core/validation';
import { AddSubscribersGroupRequest, AddSubscribersGroupRequestSchema, AddSubscribersGroupResponse } from './dto/add.dto';
import { DelSubscribersGroupRequest, DelSubscribersGroupRequestSchema, DelSubscribersGroupResponse } from './dto/del.dto';
import { EditSubscribersGroupRequest, EditSubscribersGroupRequestSchema, EditSubscribersGroupResponse } from './dto/edit.dto';
import { GetSubscribersGroupsRequest, GetSubscribersGroupsRequestSchema, GetSubscribersGroupsResponse } from './dto/get.dto';

export class SubscribersGroupsResource extends HttpResource {
  public readonly RESOURCE_NAME = 'subscriptions';

  /**
   * Getting list of subscribers groups.
   *
   * https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/poluchenie-spiska-grupp-podpischikov
   */
  @ValidateData(GetSubscribersGroupsRequestSchema, true)
  async get(data?: GetSubscribersGroupsRequest, cacheConfig?: RequestCacheConfig): Promise<GetSubscribersGroupsResponse> {
    return await this.httpClient.request<GetSubscribersGroupsResponse>(`${this.RESOURCE_NAME}/get`, data, cacheConfig);
  }

  /**
   * Add subscribers group.
   *
   * https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/dobavlenie-gruppy-podpischikov
   */
  @ValidateData(AddSubscribersGroupRequestSchema)
  async add(data: AddSubscribersGroupRequest, cacheConfig: RequestCacheConfig = { enabled: false }): Promise<AddSubscribersGroupResponse> {
    return await this.httpClient.request<AddSubscribersGroupResponse>(`${this.RESOURCE_NAME}/add`, data, cacheConfig);
  }

  /**
   * Edit subscribers group.
   *
   * https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/redaktirovanie-gruppy-podpischikov
   */
  @ValidateData(EditSubscribersGroupRequestSchema)
  async edit(data: EditSubscribersGroupRequest, cacheConfig: RequestCacheConfig = { enabled: false }): Promise<EditSubscribersGroupResponse> {
    return await this.httpClient.request<EditSubscribersGroupResponse>(`${this.RESOURCE_NAME}/edit`, data, cacheConfig);
  }

  /**
   * Del subscribers group.
   *
   * https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/udalenie-gruppy-podpischikov
   */
  @ValidateData(DelSubscribersGroupRequestSchema)
  async del(data: DelSubscribersGroupRequest, cacheConfig: RequestCacheConfig = { enabled: false }): Promise<DelSubscribersGroupResponse> {
    return await this.httpClient.request<DelSubscribersGroupResponse>(`${this.RESOURCE_NAME}/del`, data, cacheConfig);
  }
}
