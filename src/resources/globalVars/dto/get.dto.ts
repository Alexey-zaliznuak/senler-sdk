/** https://help.senler.ru/senler/dev/api/methods/globalnye-peremennye-podpischikov/poluchenie-peremennoj */

import { GlobalVar } from './get.globalVar.dto';

export interface GetGlobalVarRequest {
  /**
   * Variable name. If not specified, all subscriber variables will be returned.
   *
   * Example: `promo`
   */
  name?: string;
}

export interface GetGlobalVarResponse {
  items: Array<GlobalVar>;
}
