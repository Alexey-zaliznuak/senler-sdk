import { HttpClient } from '../../core/http-client';
import { GetVarResponse } from '../vars/dto/get.dto';
import { DeleteGlobalVarRequest, DeleteGlobalVarResponse } from './dto/del.dto';
import { GetGlobalVarRequest, GetGlobalVarResponse } from './dto/get.dto';
import { SetGlobalVarRequest, SetGlobalVarResponse } from './dto/set.dto';

export class GlobalVarsResource {
  private httpClient: HttpClient;

  public readonly RESOURCE_NAME = 'vars_global';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Get a global variable.
   *
   * https://help.senler.ru/senler/dev/api/methods/globalnye-peremennye-podpischikov/poluchenie-peremennoj
   */
  async get(data?: GetGlobalVarRequest): Promise<GetGlobalVarResponse> {
    return await this.httpClient.request<GetVarResponse>(`${this.RESOURCE_NAME}/get`, data);
  }

  /**
   * Set a global variable.
   *
   * https://help.senler.ru/senler/dev/api/methods/globalnye-peremennye-podpischikov/ustanovka-peremennoj
   */
  async set(data: SetGlobalVarRequest): Promise<SetGlobalVarResponse> {
    return await this.httpClient.request<SetGlobalVarResponse>(`${this.RESOURCE_NAME}/set`, data);
  }

  /**
   * Delete a global variable.
   *
   * https://help.senler.ru/senler/dev/api/methods/globalnye-peremennye-podpischikov/udalenie-peremennoi
   */
  async del(data: DeleteGlobalVarRequest): Promise<DeleteGlobalVarResponse> {
    return await this.httpClient.request<DeleteGlobalVarResponse>(`${this.RESOURCE_NAME}/del`, data);
  }
}
