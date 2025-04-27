/** https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov/poluchenie-peremennoi */

import Joi from 'joi';
import { Alternatives, OptionalString, RequiredPosInteger, RequiredString } from 'src/v2/core/validation';
import { Var } from './get.var.dto';

export interface GetVarRequest {
  vk_user_id: number | string;

  /**
   * Variable name. If not specified, all subscriber variables will be returned.
   *
   * Example: `promo`
   */
  name?: string;

  /** Decoding html entities. If not specified, variables with encoded entities will be returned. */
  html_entity_decode?: boolean;
}

export const GetVarRequestSchema = Joi.object({
  vk_user_id: Alternatives([RequiredPosInteger, RequiredString]).required(),
  name: OptionalString,
  html_entity_decode: Joi.boolean().optional(),
}).required();

export interface GetVarResponse {
  items: Array<Var>;
}
