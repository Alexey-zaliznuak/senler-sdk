/** https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov/ustanovka-peremennoi  */

import Joi from 'joi';
import { Alternatives, RequiredPosInteger, RequiredString } from 'src/core/validation';

export interface SetVarRequest {
  vk_user_id: number | string;
  name: string;
  value: string;
}

export const SetVarRequestSchema = Joi.object({
  vk_user_id: Alternatives([RequiredPosInteger, RequiredString]).required(),
  name: RequiredString,
  html_entity_decode: Joi.boolean().required(),
}).required();

export interface SetVarResponse {}
