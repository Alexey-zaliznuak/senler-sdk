/** https://dev.senler.ru/get-19249383e0 */

import Joi from 'joi';
import { OptionalString } from 'src/v2/core/validation';

export interface GetGroupRequest {
  /**
   * Group ID
   *
   * Example: `'123'`
   */
  group_id?: string;
}

export const GetGroupRequestSchema = Joi.object({
  group_id: OptionalString,
}).required();

export interface Group {
  /**
   * Group ID in Senler
   *
   * Example: `'123'`
   */
  group_id: string;

  /**
   * Group name
   *
   * Example: `'My Group'`
   */
  name: string;

  /**
   * Group type ID (1 - VK, 2 - TG)
   *
   * Example: `'1'`
   */
  type_id: string;

  /**
   * Group type name (vk, tg)
   *
   * Example: `'vk'`
   */
  type_name: string;

  /**
   * Photo
   *
   * Example: `'https://example.com/photo.jpg'`
   */
  photo: string;

  /**
   * External group ID
   *
   * Example: `'123456'`
   */
  external_id: string;

  /**
   * Workspace ID where the group belongs
   *
   * Example: `'789'`
   */
  workspace_id: string;
}

export interface GetGroupResponse {
  /**
   * Whether the request was successful
   */
  success: boolean;

  /**
   * Group data
   */
  item: Group;
}
