// https://help.senler.ru/senler/dev/api/methods/boty/udalit-podpischika-iz-bota

import Joi from 'joi';
import { Alternatives, RequiredPosInteger, RequiredString } from 'src/v2/core/validation';

export interface DelSubscriberRequest {
  vk_user_id: string;
  bot_id: string | number;
}

export const DelSubscriberRequestSchema = Joi.object({
  vk_user_id: Alternatives([RequiredPosInteger, RequiredString]).required(),
  bot_id: Alternatives([RequiredPosInteger, RequiredString]).required(),
}).required();

export interface DelSubscriberResponse {}
