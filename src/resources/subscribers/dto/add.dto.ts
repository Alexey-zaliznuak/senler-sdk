/** https://help.senler.ru/senler/dev/api/methods/podpischiki/dobavlenie-podpischika  */

import Joi from 'joi'
import { TypeOrNotEmptyArray, RequiredPosInteger, Alternatives, RequiredString } from 'src/core/validation'
import { UtmFilterParams } from 'src/resources/share/types';

export interface AddSubscribersInGroupRequest extends Partial<UtmFilterParams> {
  /**
   * VKontakte user ID it is possible to add both one user at a time and in bulk
   *
   * Example: `1`
   */
  vk_user_id: number | Array<number>;

  /**
   * Id of the subscriber group (0 - without a group)
   *
   * Example: `123`
   */
  subscription_id: number | string;
}

export const DelSubscriberFromSubscriptionGroupRequestSchema = Joi.object({
  vk_user_id: TypeOrNotEmptyArray(RequiredPosInteger),
  subscription_id: Alternatives([RequiredString, RequiredPosInteger]),
}).required();

export interface AddSubscribersInGroupResponse {
  subscribers: Array<AddSubscribersInGroupUserOperationDetails>;
}

export interface AddSubscribersInGroupUserOperationDetails {
  /**
   * Id of the subscriber group (`0` - without a group)
   *
   * Example: `123`
   */
  vk_user_id: string;

  /**
   * Status of operation
   */
  success: boolean;

  error?: string;
}
