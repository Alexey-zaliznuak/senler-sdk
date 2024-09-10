import { Subscription } from './subscriber.subscription.dto';
import { Utm } from './subscriber.utm.dto';
import { Var } from './subscriber.var.dto';

// https://help.senler.ru/senler/dev/api/methods/podpischiki/poluchenie-podpischikov#struktura-elementa-massiva-s-podpischikami-items
export interface Subscriber {
  // Date of the first subscription format: d.m.Y H:i:s
  // Example: 27.11.2018 10:00:00
  date: string;

  // VKontakte subscriber ID
  // Example: 1
  vk_user_id: number;

  // If the user is blacklisted, the value is "1", otherwise "0"
  ignore: 1 | 0;

  first_name: string;
  last_name: string;

  // Link to the subscriber's image
  // Example: https://sun6-6.userapi.com;
  photo: string;

  // List of subscriptions to groups
  subscriptions: Subscription[];

  // List of Senler tags and utm tags
  utms: Utm[];

  vars: Var[];
}
