/** https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/redaktirovanie-gruppy-podpischikov */

import Joi from 'joi';
import { Alternatives, RequiredInteger, RequiredString } from 'src/core/validation';
import { BaseEditableSubscribersGroup, BaseEditableSubscribersGroupSchema } from './subscription.base-editable';

export interface EditSubscribersGroupRequest extends BaseEditableSubscribersGroup {
  subscription_id: number | string;

  /** Name of subscribers group */
  name: string;
}

export const EditSubscribersGroupRequestSchema = BaseEditableSubscribersGroupSchema.concat(
  Joi.object({
    subscription_id: Alternatives([RequiredInteger, RequiredString]).required(),
    name: RequiredString,
  })
).required();

export interface EditSubscribersGroupResponse {}
