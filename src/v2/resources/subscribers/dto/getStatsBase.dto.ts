import Joi from 'joi';
import { Alternatives, OptionalPosInteger, OptionalString } from 'src/v2/core/validation';
import { ListOfEnumerate } from 'src/v2/core/validation/shortcuts/enum.validator';
import { SubscriptionSourceType, UtmFilterParams } from 'src/v2/resources/share/types';
import { UtmFilterParamsSchema } from 'src/v2/resources/share/types/utm-params-type';

export interface GetSubscribersStatisticsBaseRequest extends Partial<UtmFilterParams> {
  /**
   * Date and time from which the subscription/unsubscription occurred
   *
   * Format: d.m.Y H:i:s
   *
   * Example: `26.11.2018 10:00:00`
   */
  date_from: string;

  /**
   * Date and time until which the subscription/unsubscription occurred
   *
   * Format: d.m.Y H:i:s
   *
   * Example: `27.11.2018 10:00:00`
   */
  date_to: string;

  /**
   * VK user IDs
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
   * Exclude subscribers from these groups (0 for no group)
   *
   * Example: `[0, 123]`
   */
  ignore_subscription_id?: Array<number | string>;

  /**
   * Subscription source
   *
   * Example: `['subscription']`
   */
  source?: Array<keyof typeof SubscriptionSourceType>;
}

export const GetSubscribersStatisticsBaseRequestSchema = UtmFilterParamsSchema.concat(
  Joi.object({
    date_from: Joi.date().required(),
    date_to: Joi.date().required(),
    vk_user_id: Joi.array().items(Alternatives([OptionalPosInteger, OptionalString])),
    subscription_id: Joi.array().items(Alternatives([OptionalPosInteger, OptionalString])),
    ignore_subscription_id: Joi.array().items(Alternatives([OptionalPosInteger, OptionalString])),
    source: Joi.array().items(ListOfEnumerate(SubscriptionSourceType)),
  }),
);
