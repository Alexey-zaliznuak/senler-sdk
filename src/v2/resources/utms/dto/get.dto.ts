// https://help.senler.ru/senler/dev/api/methods/metki/poluchenie-metok

import Joi from 'joi';
import { Alternatives, OptionalPosInteger, OptionalString } from 'src/v2/core/validation';
import { UtmTag } from './get.utm.dto';

/** Return a list of all utm tags */
export interface GetUtmRequest {
  /**
   * Number of elements to return information about
   *
   * Maximum: 100
   *
   * Example: 50
   */
  count?: number;

  /**
   * Offset - how many elements to sample from
   *
   * Default: 0 | max: 100,000
   *
   * Example: 50
   */
  offset?: number;

  utm_id?: Array<number | string>;
}

export const GetUtmRequestSchema = Joi.object({
  count: OptionalPosInteger.max(100),
  offset: OptionalPosInteger.max(100000),
  utm_id: Alternatives([OptionalPosInteger, OptionalString]).optional(),
});

export interface GetUtmResponse {
  /**
   * Number of all elements in the sample
   *
   * Example: `'20'`
   */
  count: string;

  items: Array<UtmTag>;
}
