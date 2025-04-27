/** https://help.senler.ru/senler/dev/api/methods/globalnye-peremennye-podpischikov/poluchenie-peremennoj */

import Joi from 'joi';
import { OptionalString } from 'src/v2/core/validation';
import { GlobalVar } from './get.globalVar.dto';

export interface GetGlobalVarRequest {
  /**
   * Variable name. If not specified, all subscriber variables will be returned.
   *
   * Example: `promo`
   */
  name?: string;
}

export const GetGlobalVarRequestSchema = Joi.object({
  name: OptionalString,
});

export interface GetGlobalVarResponse {
  items: Array<GlobalVar>;
}
