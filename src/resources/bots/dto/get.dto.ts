// https://help.senler.ru/senler/dev/api/methods/boty/poluchenie-spiska-botov

import { BotInfo } from './get.botInfo.dto';

export interface GetBotsListRequest {
  count?: string;
  offset?: string;
  bot_id?: Array<string>;
}

export interface GetBotsListResponse {
  count: string;
  items: Array<BotInfo>;
}
