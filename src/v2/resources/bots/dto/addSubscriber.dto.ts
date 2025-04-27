// https://help.senler.ru/senler/dev/api/methods/boty/dobavlenie-podpischika-v-bota

import Joi from 'joi';
import { Alternatives, OptionalString, RequiredPosInteger, RequiredString } from 'src/v2/core/validation';

export interface AddSubscriberRequest {
  vk_user_id: string | number;
  bot_id: string | number;

  /**
   * `true` add subscriber to bot again if subscriber is already in bot
   *
   * `false` default
   */
  enforce?: boolean;

  /**
   * Step id in bot
   *
   * Example: `5c35bb800b295034fa5062a6`
   */
  step_id?: string;
}

export const AddSubscriberRequestSchema = Joi.object({
  vk_user_id: Alternatives([RequiredPosInteger, RequiredString]).required(),
  bot_id: Alternatives([RequiredPosInteger, RequiredString]).required(),
  enforce: Joi.boolean().optional(),
  step_id: OptionalString,
}).required();

export interface AddSubscriberResponse {}
