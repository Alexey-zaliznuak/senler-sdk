// https://help.senler.ru/senler/dev/api/methods/rassylki/statistika-dostavki

import Joi from 'joi';
import { Alternatives, OptionalString, RequiredPosInteger, RequiredString } from 'src/v2/core/validation';
import { DeliveryToUserAgent } from './stat.deliveryToUserAgent.dto';

export interface GetRecipientStatisticsRequest {
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
   * Number of elements to return information about
   *
   * Maximum: `100`
   *
   * Example: `50`
   */
  count?: number;

  /**
   * Offset to pass to fetch the next set (taken from the response)
   *
   * Example: `5c6992770b295058e641bb86`
   */
  offset_id?: string;

  /**
   * VKontakte user IDs
   *
   * Example: `[1]`
   */
  vk_user_id?: Array<string | number>;

  /**
   * Mailing list identifiers
   *
   * Example: `[123]`
   */
  delivery_id?: Array<string | number>;
}

export const GetRecipientStatisticsRequestSchema = Joi.object({
  date_from: Joi.date().required(),
  date_to: Joi.date().required(),
  count: RequiredPosInteger.max(100),
  offset_id: OptionalString,
  vk_user_id: Joi.array()
    .items(Alternatives([RequiredPosInteger, RequiredString]))
    .optional(),
  delivery_id: Joi.array()
    .items(Alternatives([RequiredPosInteger, RequiredString]))
    .optional(),
}).required();

export interface RecipientStatisticsResponse {
  /**
   * Offset to pass to fetch the next set
   *
   * Example: `5c6992770b295058e641bb86`
   */
  offset_id: number;

  items: Array<DeliveryToUserAgent>;
}
