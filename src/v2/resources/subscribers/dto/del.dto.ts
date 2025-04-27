/** https://help.senler.ru/senler/dev/api/methods/podpischiki/udalenie-podpischika */

import Joi from 'joi';
import { Alternatives, RequiredPosInteger, RequiredString, TypeOrNotEmptyArray } from '../../../core/validation';

export interface DelSubscriberFromSubscriptionGroupRequest {
  /**
   * VKontakte user ID
   *
   * Examples: 1; [1, 2, 3]
   */
  vk_user_id: string | Array<string>;

  /**
   * ID of the subscriber group (0 - full unsubscription from all groups)
   *
   * Example: `123`
   */
  subscription_id: number | string;
}

export const DelSubscriberFromSubscriptionGroupRequestSchema = Joi.object({
  vk_user_id: TypeOrNotEmptyArray(RequiredString),
  subscription_id: Alternatives([RequiredString, RequiredPosInteger]),
}).required();

export interface DelSubscriberFromSubscriptionGroupResponse {}
