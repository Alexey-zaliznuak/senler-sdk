// https://help.senler.ru/senler/dev/api/methods/metki/podpischiki-s-metkami

import { SubscriptionAction } from 'src/resources/share/types';

/**
 * Getting an array of subscriber actions associated with a utm tag
 */
export interface StatSubscribeUtmsRequestParams {
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
  vk_user_id?: Array<number>;

  /**
   * Subscriber group ID (missing if the subscription is without a group)
   *
   * Example: `[123]`
   */
  subscription_id?: Array<number>;

  /**
   * Utm identifiers - Senler utm tags
   *
   * Example: `[0,123]`
   */
  utm_id?: Array<number>;

  /**
   * Subscriber action: 0 - all, 1 - subscribe, 2 - unsubscribe (default 0)
   *
   * Example: `1`
   */
  action?: number;
}

export interface StatSubscribeUtmsResponse {
  success: boolean;

  /**
   * Number of all elements in the sample
   *
   * Example: `20`
   */
  count: number;

  items: Array<SubscriptionAction>;
}
