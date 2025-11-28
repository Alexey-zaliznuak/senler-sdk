import { RequestCacheConfig } from 'src/v2/configs';
import { HttpResource } from 'src/v2/core/abstract-http-resource';
import { ValidateData } from 'src/v2/core/validation';
import { GetGroupRequest, GetGroupRequestSchema, GetGroupResponse } from './dto/get.dto';

export class GroupsResource extends HttpResource {
  public readonly RESOURCE_NAME = 'groups';

  /**
   * Get a group.
   *
   * https://dev.senler.ru/get-19249383e0
   */
  @ValidateData(GetGroupRequestSchema, true)
  async get(data?: GetGroupRequest, cacheConfig?: RequestCacheConfig): Promise<GetGroupResponse> {
    return await this.httpClient.request<GetGroupResponse>(`${this.RESOURCE_NAME}/get`, data, cacheConfig);
  }
}
