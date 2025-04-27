/** https://help.senler.ru/senler/dev/api/methods/globalnye-peremennye-podpischikov/udalenie-peremennoi */

import Joi from 'joi';
import { RequiredString } from 'src/v2/core/validation';

export interface DeleteGlobalVarRequest {
  name: string;
}

export const DeleteGlobalVarRequestSchema = Joi.object({
  name: RequiredString,
}).required();

export interface DeleteGlobalVarResponse {}
