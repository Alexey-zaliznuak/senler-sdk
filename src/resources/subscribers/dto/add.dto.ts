import { Utm } from './subscriber.utm.dto';

export interface AddSubscribersRequestParams extends Partial<Utm> {
  // VKontakte user ID it is possible to add both one user at a time and in bulk
  // Example: 1
  vk_user_id: number;

  // Id of the subscriber group (0 - without a group)
  // Example: 123
  subscription_id: number;
}

export interface AddSubscribersResponse {}
