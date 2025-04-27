// https://help.senler.ru/senler/dev/api/methods/metki/dobavlenie-metki

import Joi from 'joi';
import { RequiredString } from 'src/v2/core/validation';

/** Add utm tag */
export interface AddUtmRequest {
  /** Example: tag 1 */
  name: string;
}

export const AddUtmRequestSchema = Joi.object({
  name: RequiredString,
}).required();

export interface AddUtmResponse {
  /** Created utm id */
  utm_id: string;
}
