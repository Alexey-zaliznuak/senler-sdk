/** https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/dobavlenie-gruppy-podpischikov */

import Joi from 'joi';
import { RequiredString } from 'src/v2/core/validation';
import { BaseEditableSubscribersGroup, BaseEditableSubscribersGroupSchema } from './subscription.base-editable';

export interface AddSubscribersGroupRequest extends BaseEditableSubscribersGroup {
  /** Name of group of subscriptions */
  name: string;
}

export const AddSubscribersGroupRequestSchema = BaseEditableSubscribersGroupSchema.concat(
  Joi.object({
    name: RequiredString,
  }),
).required();

export interface AddSubscribersGroupResponse {
  subscription_id: string;
}
