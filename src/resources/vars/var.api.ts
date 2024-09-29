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
  async get(data?: GetVarRequest): Promise<GetVarResponse> {
    return await this.httpClient.request<GetVarResponse>(`${this.RESOURCE_NAME}/get`, data);
  }

  /**
   * Setting a user variable.
   *
   * https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov/ustanovka-peremennoi
   */
  async set(data: SetVarRequest): Promise<SetVarResponse> {
    return await this.httpClient.request<SetVarResponse>(`${this.RESOURCE_NAME}/set`, data);
  }

  /**
   * Deleting a user variable.
   *
   * https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov/udalenie-peremennoi
   */
  async del(data: DeleteVarRequest): Promise<DeleteVarResponse> {
    return await this.httpClient.request<DeleteVarResponse>(`${this.RESOURCE_NAME}/del`, data);
  }
}
