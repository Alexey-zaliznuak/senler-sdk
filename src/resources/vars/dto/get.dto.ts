/** https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov/poluchenie-peremennoi */

import { Var } from './get.var.dto';

export interface GetVarRequest {
  vk_user_id: number;

  /**
   * Variable name. If not specified, all subscriber variables will be returned.
   *
   * Example: `promo`
   */
  name?: string;

  /** Decoding html entities. If not specified, variables with encoded entities will be returned. */
  html_entity_decode?: boolean;
}

export interface GetVarResponse {
  items: Array<Var>;
}
