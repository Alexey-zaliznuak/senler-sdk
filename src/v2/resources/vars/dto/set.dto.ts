/** https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov/ustanovka-peremennoi  */

import Joi from 'joi';
import { Alternatives, RequiredPosInteger, RequiredString } from 'src/v2/core/validation';

export interface SetVarRequest {
  vk_user_id: number | string;
  name: string;
  value: string;
}

export const SetVarRequestSchema = Joi.object({
  vk_user_id: Alternatives([RequiredPosInteger, RequiredString]).required(),
  name: RequiredString,
  value: RequiredString,
}).required();

export interface SetVarResponse {}
