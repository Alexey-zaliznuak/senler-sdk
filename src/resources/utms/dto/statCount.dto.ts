// https://help.senler.ru/senler/dev/api/methods/metki/statistika-metok

import { UtmTagWithSubscribeCountStructure } from './statCount.subscription.dto';

export interface StatCountUtmsRequestParams {
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
  date_to: number;

  /**
   * VKontakte user IDs
   *
   * example: `[1]`
   */
  vk_user_id?: Array<number>;

  /**
   * subscriber group IDs
   *
   * example: `[123]`
   */
  subscription_id?: Array<number>;

  /**
   * utm identifiers - Senler utm tags
   *
   * example: `[123]`
   */
  utm_id?: Array<number>;
}

export interface StatCountUtmsResponse {
  success: boolean;
  /**
   * Link to a group of subscribers with a label
   */
  items: Array<UtmTagWithSubscribeCountStructure>;
}
