import { RequestCacheConfig } from 'src/configs';
import { HttpClient } from '../../core/http-client';
import { DeleteVarRequest, DeleteVarResponse } from './dto/del.dto';
import { GetVarRequest, GetVarResponse } from './dto/get.dto';
import { SetVarRequest, SetVarResponse } from './dto/set.dto';

export class VarsResource {
  private httpClient: HttpClient;

  public readonly RESOURCE_NAME = 'vars';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Get a user variable.
   *
   * https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov/poluchenie-peremennoi
   */
  async get(data?: GetVarRequest, cacheConfig?: RequestCacheConfig): Promise<GetVarResponse> {
    return await this.httpClient.request<GetVarResponse>(`${this.RESOURCE_NAME}/get`, data, cacheConfig);
  }

  /**
   * Set a user variable.
   *
   * https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov/ustanovka-peremennoi
   */
  async set(data: SetVarRequest, cacheConfig: RequestCacheConfig = { enabled: false }): Promise<SetVarResponse> {
    return await this.httpClient.request<SetVarResponse>(`${this.RESOURCE_NAME}/set`, data, cacheConfig);
  }

  /**
   * Delete a user variable.
   *
   * https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov/udalenie-peremennoi
   */
  async del(data: DeleteVarRequest, cacheConfig: RequestCacheConfig = { enabled: false }): Promise<DeleteVarResponse> {
    return await this.httpClient.request<DeleteVarResponse>(`${this.RESOURCE_NAME}/del`, data, cacheConfig);
  }
}
