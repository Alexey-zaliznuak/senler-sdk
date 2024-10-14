/** https://help.senler.ru/senler/dev/api/methods/podpischiki/udalenie-podpischika */

import { IsInt } from 'class-validator';
import { IsStringOrNumberArray } from 'src/core/validation';

export class DelSubscriberFromSubscriptionGroupRequest {
  /**
   * VKontakte user ID
   *
   * Examples: 1; [1, 2, 3]
   */
  @IsStringOrNumberArray()
  vk_user_id!: number | Array<number>;

  /**
   * ID of the subscriber group (0 - full unsubscription from all groups)
   *
   * Example: `123`
   */
  @IsInt()
  subscription_id!: number;
}

export interface DelSubscriberFromSubscriptionGroupResponse {}
