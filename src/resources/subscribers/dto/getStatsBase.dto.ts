import { UtmFilterParams } from 'src/resources/share/types';
import { SubscriptionSourceType } from 'src/types';

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
