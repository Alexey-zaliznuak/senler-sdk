// https://help.senler.ru/senler/dev/api/methods/metki/redaktirovat-metku

import Joi from 'joi';
import { Alternatives, RequiredPosInteger, RequiredString } from 'src/v2/core/validation';

/** Change the utm tag by its `utm_id` */
export interface EditUtmRequest {
  utm_id: number | string;

  /**
   * New utm tag name
   *
   * Example: `label 1`
   */
  name: string;
}

export const EditUtmRequestSchema = Joi.object({
  utm_id: Alternatives([RequiredPosInteger, RequiredString]).required(),
  name: RequiredString,
}).required();

export interface EditUtmResponse {}
