// https://help.senler.ru/senler/dev/api/methods/metki/poluchenie-ssylki-dlya-metki

import Joi from 'joi';
import { Alternatives, OptionalPosInteger, RequiredPosInteger, RequiredString } from 'src/v2/core/validation';

/** Getting a link to a subscription page with a tag */
export interface GetLinkUtmRequest {
  utm_id: number | string;

  /**
   * Subscriber group id
   *
   * Example: `123`
   */
  subscription_id: string | number;

  /**
   * Automatic subscription on transition: 0 - no, 1 - yes (default: 0)
   *
   * Example: `1`
   */
  force?: number;
}

export const GetLinkUtmRequestSchema = Joi.object({
  utm_id: Alternatives([RequiredPosInteger, RequiredString]).required(),
  subscription_id: Alternatives([RequiredPosInteger, RequiredString]).required(),
  force: OptionalPosInteger.max(1),
}).required();

export interface GetLinkUtmResponse {
  /** Link to a group of subscribers with a utm tag */
  link: string;
}
