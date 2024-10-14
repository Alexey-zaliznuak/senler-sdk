import { IsOptional, IsNumber, Max, IsString, IsArray } from 'class-validator';
import { IsStringOrNumberArray, IsDateFormat } from '../../../core/validation';
import { Subscriber, SubscriptionSourceType } from 'src/resources/share/types';

export class GetSubscribersRequest {
  /**
   * Number of elements to return
   *
   * Max: `100`
   */
  @IsOptional()
  @IsNumber()
  @Max(100)
  count?: number;

  /**
   * Offset for fetching the next set
   *
   * Example: `5c6992770b295058e641bb86`
   */
  @IsOptional()
  @IsString()
  offset_id?: string;

  /**
   * VK user IDs
   *
   * Example: `[1, 2]`
   */
  @IsOptional()
  @IsStringOrNumberArray()
  vk_user_id?: Array<number | string>;

  /**
   * Subscriber group IDs, 0 for no group
   *
   * Example: `[1, 2]`
   */
  @IsOptional()
  @IsStringOrNumberArray()
  subscription_id?: Array<number | string>;

  /**
   * Exclude subscribers from these groups
   *
   * Example: `[120, 123]`
   */
  @IsOptional()
  @IsStringOrNumberArray()
  ignore_subscription_id?: Array<number | string>;

  /**
   * IDs of deliveries received by subscribers
   *
   * Example: `[123]`
   */
  @IsOptional()
  @IsStringOrNumberArray()
  delivery_id?: Array<number | string>;

  /**
   * Exclude subscribers who received these deliveries
   *
   * Example: `[123]`
   */
  @IsOptional()
  @IsStringOrNumberArray()
  ignore_delivery_id?: Array<number | string>;

  /**
   * Deliveries with errors
   *
   * Example: `[123]`
   */
  @IsOptional()
  @IsStringOrNumberArray()
  error_delivery_id?: Array<number | string>;

  /**
   * IDs of deliveries read by users
   *
   * Example: `[123]`
   */
  @IsOptional()
  @IsStringOrNumberArray()
  read_delivery_id?: Array<number | string>;

  /**
   * Deliveries not read by users
   *
   * Example: `[123]`
   */
  @IsOptional()
  @IsStringOrNumberArray()
  ignore_read_delivery_id?: Array<number | string>;

  /**
   * Deliveries where users clicked links
   *
   * Example: `[123]`
   */
  @IsOptional()
  @IsStringOrNumberArray()
  away_delivery_id?: Array<number | string>;

  /**
   * Deliveries where users did not click links
   *
   * Example: `[123]`
   */
  @IsOptional()
  @IsStringOrNumberArray()
  ignore_away_delivery_id?: Array<number | string>;

  /**
   * Subscription source
   *
   * Examples: 'subscriptions', 'widget', 'api', etc.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  source?: Array<keyof typeof SubscriptionSourceType>;

  /**
   * Date of subscription from, format: d.m.Y H:i:s
   *
   * Example: `26.11.2018 10:00:00`
   */
  @IsOptional()
  @IsDateFormat()
  date_subscription_from?: string;

  /**
   * Date of subscription to, format: d.m.Y H:i:s
   *
   * Example: `27.11.2018 10:00:00`
   */
  @IsOptional()
  @IsDateFormat()
  date_subscription_to?: string;

  /**
   * Date of first subscription from, format: d.m.Y H:i:s
   *
   * Example: `27.11.2018 10:00:00`
   */
  @IsOptional()
  @IsDateFormat()
  date_first_from?: string;

  /**
   * Date of first subscription to, format: d.m.Y H:i:s
   *
   * Example: `27.11.2018 10:00:00`
   */
  @IsOptional()
  @IsDateFormat()
  date_first_to?: string;

  /**
   * Date of delivery from, format: d.m.Y H:i:s
   *
   * Example: `27.11.2018 10:00:00`
   */
  @IsOptional()
  @IsDateFormat()
  date_delivery_from?: string;

  /**
   * Date of delivery to, format: d.m.Y H:i:s
   *
   * Example: `27.11.2018 10:00:00`
   */
  @IsOptional()
  @IsDateFormat()
  date_delivery_to?: string;

  /**
   * Date of first delivery from, format: d.m.Y H:i:s
   *
   * Example: `27.11.2018 10:00:00`
   */
  @IsOptional()
  @IsDateFormat()
  date_first_delivery_from?: string;

  /**
   * Date of first delivery to, format: d.m.Y H:i:s
   */
  @IsOptional()
  @IsDateFormat()
  date_first_delivery_to?: string;

  /**
   * Date of last delivery from, format: d.m.Y H:i:s
   */
  @IsOptional()
  @IsDateFormat()
  date_last_delivery_from?: string;

  /**
   * Date of last delivery to, format: d.m.Y H:i:s
   */
  @IsOptional()
  @IsDateFormat()
  date_last_delivery_to?: string;

  /**
   * Date of link click from, format: d.m.Y H:i:s
   */
  @IsOptional()
  @IsDateFormat()
  date_away_from?: string;

  /**
   * Date of link click to, format: d.m.Y H:i:s
   */
  @IsOptional()
  @IsDateFormat()
  date_away_to?: string;

  /**
   * Bot ID
   *
   * Example: `1234123`
   */
  @IsOptional()
  @IsStringOrNumberArray()
  bot_id?: Array<number | string>;

  /**
   * Bot step IDs for the given bot
   *
   * Example: `['5c6992770b295058e641bb86']`
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  step_id?: Array<string>;

  /**
   * Exclude subscribers from this bot
   *
   * Example: `1`
   */
  @IsOptional()
  @IsNumber()
  ignore_bot_id?: number;

  /**
   * Exclude steps for the bot in ignore_bot_id
   *
   * Example: `['5c6992770b295058e641bb86']`
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  ignore_step_id?: Array<string>;

  /**
   * Subscriber status filter, 1 for Active, 2 for Inactive
   */
  @IsOptional()
  @IsNumber()
  lead_status?: 1 | 2;

  /**
   * Name of the variable
   *
   * Example: `age`
   */
  @IsOptional()
  @IsString()
  var_name?: string;

  /**
   * Value of the variable
   *
   * Example: `30`
   */
  @IsOptional()
  @IsStringOrNumberArray()
  var_value?: string | number;
}

export interface GetSubscribersResponse {
  /**
   * The offset that needs to be transmitted to select the next set
   *
   * Example: `5c6992770b295058e641bb86`
   */
  offset_id: string;

  items: Array<Subscriber>;
}
