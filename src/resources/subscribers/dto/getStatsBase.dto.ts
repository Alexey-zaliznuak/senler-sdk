import { IsArray, IsDate, IsEnum, IsOptional } from 'class-validator';
import { IsStringOrNumberArray } from 'src/core/validation';
import { UtmFilterParams } from 'src/resources/share/types';
import { SubscriptionSourceType } from 'src/types';

export class GetSubscribersStatisticsBaseRequest extends UtmFilterParams {
  /**
   * Date and time from which the subscription/unsubscription occurred
   *
   * Format: d.m.Y H:i:s
   *
   * Example: `26.11.2018 10:00:00`
   */
  @IsDate()
  date_from!: string;

  /**
   * Date and time until which the subscription/unsubscription occurred
   *
   * Format: d.m.Y H:i:s
   *
   * Example: `27.11.2018 10:00:00`
   */
  @IsDate()
  date_to!: string;

  /**
   * VK user IDs
   *
   * Example: `[1]`
   */
  @IsOptional()
  @IsStringOrNumberArray()
  vk_user_id?: Array<number | string>;

  /**
   * Subscriber group IDs
   *
   * Example: `[123]`
   */
  @IsOptional()
  @IsStringOrNumberArray()
  subscription_id?: Array<number | string>;

  /**
   * Exclude subscribers from these groups (0 for no group)
   *
   * Example: `[0, 123]`
   */
  @IsOptional()
  @IsStringOrNumberArray()
  ignore_subscription_id?: Array<number | string>;

  /**
   * Subscription source
   *
   * Example: `['subscription']`
   */
  @IsOptional()
  @IsArray()
  @IsEnum(SubscriptionSourceType, { each: true })
  source?: Array<keyof typeof SubscriptionSourceType>;
}
