/** https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov/udalenie-peremennoi */

import Joi from 'joi';
import { Alternatives, RequiredPosInteger, RequiredString } from 'src/v2/core/validation';

export interface DeleteVarRequest {
  vk_user_id: number | string;
  name: string;
}

export const DeleteVarRequestSchema = Joi.object({
  vk_user_id: Alternatives([RequiredPosInteger, RequiredString]).required(),
  name: RequiredString,
}).required();

export interface DeleteVarResponse {}
