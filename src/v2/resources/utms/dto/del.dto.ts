// https://help.senler.ru/senler/dev/api/methods/metki/udalenie-metki

import Joi from 'joi';
import { Alternatives, RequiredPosInteger, RequiredString } from 'src/v2/core/validation';

export interface DeleteUtmRequest {
  utm_id: number | string;
}

export const DeleteUtmRequestSchema = Joi.object({
  utm_id: Alternatives([RequiredPosInteger, RequiredString]).required(),
}).required();

export interface DeleteUtmResponse {}
