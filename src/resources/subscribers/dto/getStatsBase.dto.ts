// https://help.senler.ru/senler/dev/api/methods/podpischiki/statistika-podpisok

import { SubscriptionSourceType } from "./subscriber.subscription.dto";
import { UtmFilterParams } from "./subscriber.utm.dto";


export interface GetSubscribersStatisticsBaseRequestParams extends Partial<UtmFilterParams> {
  // Date and time from which the subscription/unsubscription occurred
  // Format: d.m.Y H:i:s
  // Example: 26.11.2018 10:00:00
  date_from: string;

  // Date and time until which the subscription/unsubscription occurred
  // Format: d.m.Y H:i:s
  // Example: 27.11.2018 10:00:00
  date_to: string;

  // VK user IDs
  // Example: [1]
  vk_user_id?: number[];

  // Subscriber group IDs
  // Example: [123]
  subscription_id?: number[];

  // Exclude subscribers from these groups (0 for no group)
  // Example: [0, 123]
  ignore_subscription_id?: number[];

  // Subscription source
  // Possible values: 'subscriptions', 'subscription', 'widget', 'keyword', 'api', 'site', 'hand', 'other'
  // Example: ['subscription']
  source?: SubscriptionSourceType[];
}
