/** https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/udalenie-gruppy-podpischikov */

import Joi from 'joi';
import { Alternatives, RequiredInteger, RequiredString } from 'src/v2/core/validation';

export interface DelSubscribersGroupRequest {
  subscription_id: string | number;
}

// TODO: Протестировать required
export const DelSubscribersGroupRequestSchema = Joi.object({
  subscription_id: Alternatives([RequiredInteger, RequiredString]).required(),
}).required();

export interface DelSubscribersGroupResponse {}
