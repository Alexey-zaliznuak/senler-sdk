/** https://help.senler.ru/senler/dev/api/methods/globalnye-peremennye-podpischikov/ustanovka-peremennoj */

import Joi from 'joi';
import { RequiredString } from 'src/v2/core/validation';

export interface SetGlobalVarRequest {
  name: string;
  value: string;
}

export const SetGlobalVarRequestSchema = Joi.object({
  name: RequiredString,
  value: RequiredString,
}).required();

export interface SetGlobalVarResponse {}
