// https://help.senler.ru/senler/dev/api/methods/rassylki/poluchenie-spiska-rassylok

import Joi from 'joi';
import { Alternatives, OptionalInteger, RequiredPosInteger, RequiredString } from 'src/v2/core/validation';
import { ListOfEnumerate } from 'src/v2/core/validation/shortcuts/enum.validator';
import { Delivery } from './get.delivery.dto';
import { DeliveriesStatus } from './get.status.dto';
import { DeliveriesType } from './get.type.dto';

export interface GetDeliveriesRequest {
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

  delivery_id?: Array<number | string>;

  /**
   * deliveries types:
   *
   * `chain` Auto message
   *
   * `subscription` Group mailing
   *
   * `once` Targeted mailing
   *
   * `single` One-time mailing
   *
   * example: `['once','auto','subscription','chain','single']`
   */
  type?: Array<keyof typeof DeliveriesType>;

  /**
   * mailing status:
   *
   * `waiting` Waiting
   *
   * `progress` Processing
   *
   * `done` Completed
   *
   * example: ['waiting', 'progress', 'done', 'error']
   */
  status?: Array<keyof typeof DeliveriesStatus>;
}

export const GetDeliveriesRequestSchema = Joi.object({
  count: OptionalInteger.max(100),
  offset: OptionalInteger.max(100000),
  delivery_id: Joi.array()
    .items(Alternatives([RequiredPosInteger, RequiredString]))
    .optional(),
  type: Joi.array().items(ListOfEnumerate(DeliveriesType)).optional(),
  status: Joi.array().items(ListOfEnumerate(DeliveriesStatus)).optional(),
});

export interface GetDeliveriesResponse {
  /**
   * Number of all elements in the sample
   *
   * Example: `'20'`
   */
  count: string;

  items: Array<Delivery>;
}
