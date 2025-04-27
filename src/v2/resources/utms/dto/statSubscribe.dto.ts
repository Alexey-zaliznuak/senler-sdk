// https://help.senler.ru/senler/dev/api/methods/metki/podpischiki-s-metkami

import Joi from 'joi';
import { Alternatives, OptionalPosInteger, RequiredPosInteger, RequiredString } from 'src/v2/core/validation';
import { SubscriptionAction } from 'src/v2/resources/share/types';

/**
 * Getting an array of subscriber actions associated with a utm tag
 */
export interface GetUtmSubscriptionsStatisticsRequest {
  /**
   * Date and time from which subscribed/unsubscribed
   *
   * Format: `d.m.Y H:i:s` Example: `26.11.2018 10:00:00`
   */
  date_from: string;

  /**
   * Date and time before which subscribed/unsubscribed
   *
   * Format: `d.m.Y H:i:s` Example: `27.11.2018 10:00:00`
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
   * Offset - how many elements to sample from
   *
   * Default: `0` | max: `100,000`
   *
   * Example: `50`
   */
  offset?: number;

  /**
   * VKontakte user IDs
   *
   * Example: `[1]`
   */
  vk_user_id?: Array<number | string>;

  /**
   * Subscriber group ID (missing if the subscription is without a group)
   *
   * Example: `[123]`
   */
  subscription_id?: Array<number | string>;

  /**
   * Utm identifiers - Senler utm tags
   *
   * Example: `[0,123]`
   */
  utm_id?: Array<number | string>;

  /**
   * Subscriber action: 0 - all, 1 - subscribe, 2 - unsubscribe (default 0)
   *
   * Example: `1`
   */
  action?: number;
}

export const GetUtmSubscriptionsStatisticsRequestSchema = Joi.object({
  date_from: Joi.date().required(),
  date_to: Joi.date().required(),
  count: OptionalPosInteger.max(100),
  offset: OptionalPosInteger.max(100000),
  vk_user_id: Joi.array()
    .items(Alternatives([RequiredPosInteger, RequiredString]))
    .optional(),
  subscription_id: Joi.array()
    .items(Alternatives([RequiredPosInteger, RequiredString]))
    .optional(),
  utm_id: Joi.array()
    .items(Alternatives([RequiredPosInteger, RequiredString]))
    .optional(),
  action: OptionalPosInteger.max(2),
}).required();

export interface SubscriptionsStatisticsResponse {
  /**
   * Number of all elements in the sample
   *
   * Example: `20`
   */
  count: number;

  items: Array<SubscriptionAction>;
}
