// https://help.senler.ru/senler/dev/api/methods/boty/poluchenie-spiska-botov

import { BotInfo } from './get.botInfo.dto';

export interface GetBotsListRequest {
  /**
   * Number of elements to return information about
   *
   * Maximum: `100`
   */
  count?: string;

  /**
   * Offset - how many elements to sample from
   *
   * Default: `0`
   *
   * Max: `100,000`
   */
  offset?: string;

  /**
   * Bots id
   *
   * Example: `[123]`
   */
  bot_id?: Array<string>;
}

export interface GetBotsListResponse {
  count: string;
  items: Array<BotInfo>;
}
