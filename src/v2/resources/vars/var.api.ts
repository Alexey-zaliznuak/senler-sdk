import { RequestCacheConfig } from 'src/v2/configs';
import { HttpResource } from 'src/v2/core/abstract-http-resource';
import { ValidateData } from 'src/v2/core/validation';
import { DeleteVarRequest, DeleteVarRequestSchema, DeleteVarResponse } from './dto/del.dto';
import { GetVarRequest, GetVarRequestSchema, GetVarResponse } from './dto/get.dto';
import { SetVarRequest, SetVarRequestSchema, SetVarResponse } from './dto/set.dto';

export class VarsResource extends HttpResource {
  public readonly RESOURCE_NAME = 'vars';

  /**
   * Get a user variable.
   *
   * https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov/poluchenie-peremennoi
   */
  @ValidateData(GetVarRequestSchema)
  async get(data: GetVarRequest, cacheConfig?: RequestCacheConfig): Promise<GetVarResponse> {
    return await this.httpClient.request<GetVarResponse>(`${this.RESOURCE_NAME}/get`, data, cacheConfig);
  }

  /**
   * Set a user variable.
   *
   * https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov/ustanovka-peremennoi
   */
  @ValidateData(SetVarRequestSchema)
  async set(data: SetVarRequest, cacheConfig: RequestCacheConfig = { enabled: false }): Promise<SetVarResponse> {
    return await this.httpClient.request<SetVarResponse>(`${this.RESOURCE_NAME}/set`, data, cacheConfig);
  }

  /**
   * Delete a user variable.
   *
   * https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov/udalenie-peremennoi
   */
  @ValidateData(DeleteVarRequestSchema)
  async del(data: DeleteVarRequest, cacheConfig: RequestCacheConfig = { enabled: false }): Promise<DeleteVarResponse> {
    return await this.httpClient.request<DeleteVarResponse>(`${this.RESOURCE_NAME}/del`, data, cacheConfig);
  }
}
