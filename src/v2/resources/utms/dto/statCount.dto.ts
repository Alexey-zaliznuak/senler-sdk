// https://help.senler.ru/senler/dev/api/methods/metki/statistika-metok

import Joi from 'joi';
import { Alternatives, RequiredPosInteger, RequiredString } from 'src/v2/core/validation';
import { UtmTagWithSubscribeCount } from './statCount.subscription.dto';

/** Getting statistics on the number of subscriptions to ***any*** group with the utm tag */
export interface GetUtmSubscriptionsCountStatisticsRequest {
  /**
   * Date and time from which subscribed/unsubscribed
   *
   * Format: `d.m.Y H:i:s` example: `26.11.2018 10:00:00`
   */
  date_from: string;

  /**
   * Date and time before which subscribed/unsubscribed
   *
   * Format: `d.m.Y H:i:s` example: `27.11.2018 10:00:00`
   */
  date_to: string;

  /**
   * VKontakte user IDs
   *
   * Example: `[1]`
   */
  vk_user_id?: Array<number | string>;

  /**
   * Subscriber group IDs
   *
   * Example: `[123]`
   */
  subscription_id?: Array<number | string>;

  /**
   * Utm identifiers - Senler utm tags
   *
   * Example: `[123]`
   */
  utm_id?: Array<number | string>;
}

export const GetUtmSubscriptionsCountStatisticsRequestSchema = Joi.object({
  date_from: Joi.date().required(),
  date_to: Joi.date().required(),
  vk_user_id: Joi.array()
    .items(Alternatives([RequiredPosInteger, RequiredString]))
    .optional(),
  subscription_id: Joi.array()
    .items(Alternatives([RequiredPosInteger, RequiredString]))
    .optional(),
  utm_id: Joi.array()
    .items(Alternatives([RequiredPosInteger, RequiredString]))
    .optional(),
}).required();

export interface GetUtmSubscriptionsCountStatisticsResponse {
  /**
   * Link to a group of subscribers with a label
   */
  items: Array<UtmTagWithSubscribeCount>;
}
