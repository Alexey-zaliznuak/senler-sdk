/** https://help.senler.ru/senler/dev/api/methods/podpischiki/statistika-podpisok */

import { SubscriptionSourceType } from 'src/resources/share/types'
import { GetSubscribersStatisticsBaseRequestParams } from "./getStatsBase.dto";

import { Utm } from "./subscriber.utm.dto";


export interface GetSubscriptionsStatisticsRequestParams extends GetSubscribersStatisticsBaseRequestParams {
  /**
   * Number of elements to return
   *
   * Max: `100`
   */
  count?: number;

  /**
   * Offset for fetching a subset of conversations
   *
   * Example: `10`
   */
  offset?: number;
}

export interface GetSubscriptionsStatisticResponse {
  items: SubscriptionAction[];
}

export interface SubscriptionAction extends Partial<Utm>{
  /**
   * Date and time of the subscription/unsubscription
   *
   * Format: d.m.Y H:i:s
   *
   * Example: `27.11.2018 10:00:00`
   */
  date: string;

  vk_user_id: number;

  first_name: string;
  last_name: string;

  /**
   * URL to the subscriber's profile picture
   *
   * Example: `https://sun6-6.userapi.com`
   */
  photo: string;

  /**
   * Subscriber group ID (missing if the subscription is without a group)
   *
   * Example: `123`
   */
  subscription_id?: number;

  /**
   * Action type:
   *
   * 1 - subscription
   *
   * 2 - unsubscription
   */
  action: 1 | 2;

  /**
   * If the user is blacklisted at the time of subscription, the value is "1", otherwise "0"
   *
   * Example: `0`
   */
  ignore: 0 | 1;

  source: SubscriptionSourceType;
}
