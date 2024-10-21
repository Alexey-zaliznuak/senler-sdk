import { RequestCacheConfig } from 'src/configs';
import { DeleteVarRequest, DeleteVarRequestSchema, DeleteVarResponse } from './dto/del.dto';
import { GetVarRequest, GetVarRequestSchema, GetVarResponse } from './dto/get.dto';
import { SetVarRequest, SetVarRequestSchema, SetVarResponse } from './dto/set.dto';
import { ValidateData } from 'src/core/validation';
import { HttpResource } from 'src/core/abstract-http-resource';

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
