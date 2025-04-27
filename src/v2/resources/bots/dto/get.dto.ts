// https://help.senler.ru/senler/dev/api/methods/boty/poluchenie-spiska-botov

import Joi from 'joi';
import { Alternatives, OptionalPosInteger, RequiredPosInteger, RequiredString } from 'src/v2/core/validation';
import { BotInfo } from './get.botInfo.dto';

export interface GetBotsListRequest {
  /**
   * Number of elements to return information about
   *
   * Maximum: `100`
   */
  count?: number | string;

  /**
   * Offset - how many elements to sample from
   *
   * Default: `0`
   *
   * Max: `100000`
   */
  offset?: number;

  /**
   * Bots id
   *
   * Example: `[1234123]`
   */
  bot_id?: Array<number | string>;
}

export const GetBotsListRequestSchema = Joi.object({
  count: Alternatives([RequiredPosInteger, RequiredString]).optional(),
  offset: OptionalPosInteger,
  bot_id: Joi.array()
    .items(Alternatives([RequiredPosInteger, RequiredString]))
    .optional(),
}).required();

export interface GetBotsListResponse {
  count: string;
  items: Array<BotInfo>;
}
