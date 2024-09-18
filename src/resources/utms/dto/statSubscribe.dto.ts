// https://help.senler.ru/senler/dev/api/methods/metki/podpischiki-s-metkami

import { SubscriptionStructure } from './statSubscribe.subscription.dto';

export interface StatSubscribeUtmsRequestParams {
  /**
   * date and time from which subscribed/unsubscribed
   *
   * format: `d.m.Y H:i:s` example: `26.11.2018 10:00:00`
   */
  date_from: string;

  /**
   * date and time before which subscribed/unsubscribed
   *
   * format: `d.m.Y H:i:s` example: `27.11.2018 10:00:00`
   */
  date_to: string;

  /**
   * number of elements to return information about
   *
   * maximum: `100`
   *
   * example: `50`
   */
  count?: number;

  /**
   * offset - how many elements to sample from
   *
   * default: `0` | max: `100,000`
   *
   * example: `50`
   */
  offset?: number;

  /**
   * VKontakte user IDs
   *
   * example: `[1]`
   */
  vk_user_id?: Array<number>;

  /**
   * идентификаторы групп подписчиков
   *
   * пример: `[123]`
   */
  subscription_id?: Array<number>;

  /**
   * utm identifiers - Senler utm tags
   *
   * example: `[0,123]`
   */
  utm_id?: Array<number>;

  /**
   * subscriber action: 0 - all, 1 - subscribe, 2 - unsubscribe (default 0)
   *
   * example: `1`
   */
  action?: number;
}

export interface StatSubscribeUtmsResponse {
  success: boolean;

  /**
   * number of all elements in the sample
   *
   * example: `20`
   */
  count: number;

  items: Array<SubscriptionStructure>;
}
