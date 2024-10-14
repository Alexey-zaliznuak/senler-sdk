/** https://help.senler.ru/senler/dev/api/methods/podpischiki/dobavlenie-podpischika  */

import { IsArray, IsInt, IsOptional } from 'class-validator';
import { UtmFilterParams } from 'src/resources/share/types';

export class AddSubscribersInGroupRequest extends UtmFilterParams {
  /**
   * VKontakte user ID. It is possible to add both one user at a time and in bulk.
   *
   * Example: `1`
   */
  @IsArray()
  @IsInt({ each: true })
  vk_user_id!: number[];

  /**
   * Id of the subscriber group (0 - without a group)
   *
   * Example: `123`
   */
  @IsOptional()
  @IsInt()
  subscription_id?: number;
}

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
