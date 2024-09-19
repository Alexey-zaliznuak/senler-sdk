/** https://help.senler.ru/senler/dev/api/methods/podpischiki/dobavlenie-podpischika  */

import { UtmFilterParams } from 'src/resources/share/types'


export interface AddSubscribersInGroupRequest extends Partial<UtmFilterParams> {
  /**
   * VKontakte user ID it is possible to add both one user at a time and in bulk
   *
   * Example: `1`
   */
  vk_user_id: number | number[];

  /**
   * Id of the subscriber group (0 - without a group)
   *
   * Example: `123`
   */
  subscription_id: number;
}

export interface AddSubscribersInGroupResponse {
  subscribers: AddSubscribersInGroupUserOperationDetails[];
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
