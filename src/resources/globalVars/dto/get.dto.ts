/** https://help.senler.ru/senler/dev/api/methods/globalnye-peremennye-podpischikov/poluchenie-peremennoj */

import { OptionalString } from 'src/core/validation'
import { GlobalVar } from './get.globalVar.dto';
import Joi from 'joi'

export interface GetGlobalVarRequest {
  /**
   * Variable name. If not specified, all subscriber variables will be returned.
   *
   * Example: `promo`
   */
  name?: string;
}

export const GetGlobalVarRequestSchema = Joi.object({
  name: OptionalString
}).required();

export interface GetGlobalVarResponse {
  items: Array<GlobalVar>;
}
