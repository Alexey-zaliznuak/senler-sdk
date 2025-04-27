// https://help.senler.ru/senler/dev/api/methods/rassylki/statcount

import Joi from 'joi';
import { Alternatives, RequiredPosInteger, RequiredString } from 'src/v2/core/validation';

export interface GetDeliveryCountStatisticsRequest {
  /**
   * Date and time from which subscribed/unsubscribed
   *
   * Format: `d.m.Y H:i:s`
   *
   * Example: `26.11.2018 10:00:00`
   */
  date_from: string;

  /**
   * Date and time before which subscribed/unsubscribed
   *
   * Format: `d.m.Y H:i:s`
   *
   * Example: `27.11.2018 10:00:00`
   */
  date_to: string;

  /**
   * VKontakte user IDs
   *
   * Example: `[1]`
   */
  vk_user_id?: Array<number | string>;

  /**
   * Mailing list identifiers
   *
   * Example: `[123]`
   */
  delivery_id?: Array<number | string>;
}

export const GetDeliveryCountStatisticsRequestSchema = Joi.object({
  date_from: Joi.date().required(),
  date_to: Joi.date().required(),
  vk_user_id: Joi.array()
    .items(Alternatives([RequiredPosInteger, RequiredString]))
    .optional(),
  delivery_id: Joi.array()
    .items(Alternatives([RequiredPosInteger, RequiredString]))
    .optional(),
}).required();

export interface DeliveryCountStatisticsResponse {
  /**
   * Offset to pass to fetch the next set
   *
   * Example: `5c6992770b295058e641bb86`
   */
  offset_id: number;

  /**
   * Link to a group of subscribers with a label
   */
  count: number;
}
