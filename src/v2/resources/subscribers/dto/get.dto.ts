/** https://help.senler.ru/senler/dev/api/methods/podpischiki/poluchenie-podpischikov */

import Joi from 'joi';
import { Alternatives, OptionalInteger, OptionalPosInteger, OptionalString, RequiredPosInteger, RequiredString } from 'src/v2/core/validation';
import { ListOfEnumerate } from 'src/v2/core/validation/shortcuts/enum.validator';
import { Subscriber, SubscriptionSourceType, UtmManyFilterParams } from 'src/v2/resources/share/types';

export interface GetSubscribersRequest extends Partial<UtmManyFilterParams> {
  /**
   * Number of elements to return
   *
   * Max: `100`
   */
  count?: number;

  /**
   * Offset for fetching the next set
   *
   * Example: `5c6992770b295058e641bb86`
   */
  offset_id?: string;

  /**
   * VK user IDs
   *
   * Example: `[1, 2]`
   */
  vk_user_id?: Array<number | string>;

  /**
   * Subscriber group IDs, 0 for no group
   *
   * Example: `[1, 2]`
   */
  subscription_id?: Array<number | string>;

  /**
   * Exclude subscribers from these groups
   *
   * Example: `[120, 123]`
   */
  ignore_subscription_id?: Array<number | string>;

  /**
   * IDs of deliveries received by subscribers
   *
   * Example: `[123]`
   */
  delivery_id?: Array<number | string>;

  /**
   * Exclude subscribers who received these deliveries
   *
   * Example: `[123]`
   */
  ignore_delivery_id?: Array<number | string>;

  /**
   * Deliveries with errors
   *
   * Example: `[123]`
   */
  error_delivery_id?: Array<number | string>;

  /**
   * IDs of deliveries read by users
   * Example: `[123]`
   */
  read_delivery_id?: Array<number | string>;

  /**
   * Deliveries not read by users
   *
   * Example: `[123]`
   */
  ignore_read_delivery_id?: Array<number | string>;

  /**
   * Deliveries where users clicked links
   *
   * Example: `[123]`
   */
  away_delivery_id?: Array<number | string>;

  /**
   * Deliveries where users did not click links
   *
   * Example: `[123]`
   */
  ignore_away_delivery_id?: Array<number | string>;

  /**
   * Subscription source
   *
   * Examples: 'subscriptions', 'widget', 'api', etc.
   */
  source?: Array<keyof typeof SubscriptionSourceType>;

  /**
   * Date of subscription from, format: d.m.Y H:i:s
   *
   * Example: `26.11.2018 10:00:00`
   */
  date_subscription_from?: string;

  /**
   * Date of subscription to, format: d.m.Y H:i:s
   *
   * Example: `27.11.2018 10:00:00`
   */
  date_subscription_to?: string;

  /**
   * Date of first subscription from, format: d.m.Y H:i:s
   *
   * Example: `27.11.2018 10:00:00`
   */
  date_first_from?: string;

  /**
   * Date of first subscription to, format: d.m.Y H:i:s
   *
   * Example: `27.11.2018 10:00:00`
   */
  date_first_to?: string;

  /**
   * Date of delivery from, format: d.m.Y H:i:s
   *
   * Example: `27.11.2018 10:00:00`
   */
  date_delivery_from?: string;

  /**
   * Date of delivery to, format: d.m.Y H:i:s
   *
   * Example: `27.11.2018 10:00:00`
   */
  date_delivery_to?: string;

  /**
   * Date of first delivery from, format: d.m.Y H:i:s
   *
   * Example: `27.11.2018 10:00:00`
   */
  date_first_delivery_from?: string;

  /** Date of first delivery to, format: d.m.Y H:i:s */
  date_first_delivery_to?: string;

  /** Date of last delivery from, format: d.m.Y H:i:s */
  date_last_delivery_from?: string;

  /** Date of last delivery to, format: d.m.Y H:i:s */
  date_last_delivery_to?: string;

  /** Date of link click from, format: d.m.Y H:i:s */
  date_away_from?: string;

  /** Date of link click to, format: d.m.Y H:i:s */
  date_away_to?: string;

  /**
   * Bot ID
   *
   * Example: `1234123`
   */
  bot_id?: number | string;

  /**
   * Bot step IDs for the given bot
   *
   * Example: `['5c6992770b295058e641bb86']`
   */
  step_id?: Array<string>;

  /**
   * Exclude subscribers from this bot
   *
   * Example: `1`
   */
  ignore_bot_id?: number;

  /**
   * Exclude steps for the bot in ignore_bot_id
   *
   * Example: `['5c6992770b295058e641bb86']`
   */
  ignore_step_id?: Array<string>;

  /** Subscriber status filter, 1 for Active, 2 for Inactive */
  lead_status?: 1 | 2;

  /**
   * Name of the variable
   *
   * Example: `age`
   */
  var_name?: string;

  /**
   * Value of the variable
   *
   * Example: `30`
   */
  var_value?: string | number;
}

export const GetSubscribersRequestSchema = Joi.object({
  count: OptionalInteger,
  offset_id: OptionalString,
  subscription_id: Joi.array()
    .items(Alternatives([OptionalPosInteger, OptionalString]))
    .optional(),
  vk_user_id: Joi.array()
    .items(Alternatives([OptionalPosInteger, OptionalString]))
    .optional(),
  ignore_subscription_id: Joi.array()
    .items(Alternatives([OptionalPosInteger, OptionalString]))
    .optional(),
  delivery_id: Joi.array()
    .items(Alternatives([OptionalPosInteger, OptionalString]))
    .optional(),
  ignore_delivery_id: Joi.array()
    .items(Alternatives([OptionalPosInteger, OptionalString]))
    .optional(),
  error_delivery_id: Joi.array()
    .items(Alternatives([OptionalPosInteger, OptionalString]))
    .optional(),
  read_delivery_id: Joi.array()
    .items(Alternatives([OptionalPosInteger, OptionalString]))
    .optional(),
  ignore_read_delivery_id: Joi.array()
    .items(Alternatives([OptionalPosInteger, OptionalString]))
    .optional(),
  away_delivery_id: Joi.array()
    .items(Alternatives([OptionalPosInteger, OptionalString]))
    .optional(),
  ignore_away_delivery_id: Joi.array()
    .items(Alternatives([OptionalPosInteger, OptionalString]))
    .optional(),
  source: ListOfEnumerate(SubscriptionSourceType).optional(),
  date_subscription_from: Joi.date().optional(),
  date_subscription_to: Joi.date().optional(),
  date_first_from: Joi.date().optional(),
  date_first_to: Joi.date().optional(),
  date_delivery_from: Joi.date().optional(),
  date_delivery_to: Joi.date().optional(),
  date_first_delivery_from: Joi.date().optional(),
  date_first_delivery_to: Joi.date().optional(),
  date_last_delivery_from: Joi.date().optional(),
  date_last_delivery_to: Joi.date().optional(),
  date_away_from: Joi.date().optional(),
  date_away_to: Joi.date().optional(),
  bot_id: Alternatives([OptionalPosInteger, OptionalString]).optional(),
  step_id: Joi.array().items(OptionalInteger).optional(),
  ignore_bot_id: OptionalInteger,
  ignore_step_id: Joi.array().items(OptionalString).optional(),
  lead_status: Joi.valid(1, 2).optional(),
  var_name: OptionalString,
  var_value: Alternatives([RequiredString, RequiredPosInteger]),
});

export interface GetSubscribersResponse {
  /**
   * The offset that needs to be transmitted to select the next set
   *
   * Example: `5c6992770b295058e641bb86`
   */
  offset_id: string;

  items: Array<Subscriber>;
}
