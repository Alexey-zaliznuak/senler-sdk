/** https://help.senler.ru/senler/dev/api/methods/podpischiki/dobavlenie-podpischika  */

import Joi from 'joi';
import { Alternatives, RequiredPosInteger, RequiredString, TypeOrNotEmptyArray } from 'src/v2/core/validation';
import { UtmFilterParams } from 'src/v2/resources/share/types';

export interface AddSubscribersInGroupRequest extends Partial<UtmFilterParams> {
  /**
   * VKontakte user ID it is possible to add both one user at a time and in bulk
   *
   * Example: `1`
   */
  vk_user_id: string | Array<string>;

  /**
   * Id of the subscriber group (0 - without a group)
   *
   * Example: `123`
   */
  subscription_id: number | string;
}

export const AddSubscribersInGroupRequestSchema = Joi.object({
  vk_user_id: TypeOrNotEmptyArray(RequiredString),
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
