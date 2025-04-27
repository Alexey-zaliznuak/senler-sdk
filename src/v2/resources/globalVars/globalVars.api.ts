import { RequestCacheConfig } from 'src/v2/configs';
import { HttpResource } from 'src/v2/core/abstract-http-resource';
import { ValidateData } from 'src/v2/core/validation';
import { GetVarResponse } from '../vars/dto/get.dto';
import { DeleteGlobalVarRequest, DeleteGlobalVarRequestSchema, DeleteGlobalVarResponse } from './dto/del.dto';
import { GetGlobalVarRequest, GetGlobalVarRequestSchema, GetGlobalVarResponse } from './dto/get.dto';
import { SetGlobalVarRequest, SetGlobalVarRequestSchema, SetGlobalVarResponse } from './dto/set.dto';

export class GlobalVarsResource extends HttpResource {
  public readonly RESOURCE_NAME = 'vars_global';

  /**
   * Get a global variable.
   *
   * https://help.senler.ru/senler/dev/api/methods/globalnye-peremennye-podpischikov/poluchenie-peremennoj
   */
  @ValidateData(GetGlobalVarRequestSchema, true)
  async get(data?: GetGlobalVarRequest, cacheConfig?: RequestCacheConfig): Promise<GetGlobalVarResponse> {
    return await this.httpClient.request<GetVarResponse>(`${this.RESOURCE_NAME}/get`, data, cacheConfig);
  }

  /**
   * Set a global variable.
   *
   * https://help.senler.ru/senler/dev/api/methods/globalnye-peremennye-podpischikov/ustanovka-peremennoj
   */
  @ValidateData(SetGlobalVarRequestSchema)
  async set(data: SetGlobalVarRequest, cacheConfig: RequestCacheConfig = { enabled: false }): Promise<SetGlobalVarResponse> {
    return await this.httpClient.request<SetGlobalVarResponse>(`${this.RESOURCE_NAME}/set`, data, cacheConfig);
  }

  /**
   * Delete a global variable.
   *
   * https://help.senler.ru/senler/dev/api/methods/globalnye-peremennye-podpischikov/udalenie-peremennoi
   */
  @ValidateData(DeleteGlobalVarRequestSchema)
  async del(data: DeleteGlobalVarRequest, cacheConfig: RequestCacheConfig = { enabled: false }): Promise<DeleteGlobalVarResponse> {
    return await this.httpClient.request<DeleteGlobalVarResponse>(`${this.RESOURCE_NAME}/del`, data, cacheConfig);
  }
}
