import { Subscriber } from "./subscriber.dto";
import { SourceType } from "./subscriber.subscription.dto";


// https://help.senler.ru/senler/dev/api/methods/podpischiki/poluchenie-podpischikov
export interface GetSubscribersRequestParams {
  // Number of elements to return
  // Max: 100
  // Example: 50
  count?: number;

  // Offset for fetching the next set
  // Example: '5c6992770b295058e641bb86'
  offset_id?: string;

  // VK user IDs
  // Example: [1, 2]
  vk_user_id?: number[];

  // Subscriber group IDs, 0 for no group
  // Example: [0, 123]
  subscription_id?: number[];

  // Exclude subscribers from these groups
  // Example: [0, 123]
  ignore_subscription_id?: number[];

  // IDs of deliveries received by subscribers
  // Example: [123]
  delivery_id?: number[];

  // Exclude subscribers who received these deliveries
  // Example: [123]
  ignore_delivery_id?: number[];

  // Deliveries with errors
  // Example: [123]
  error_delivery_id?: number[];

  // IDs of deliveries read by users
  // Example: [123]
  read_delivery_id?: number[];

  // Deliveries not read by users
  // Example: [123]
  ignore_read_delivery_id?: number[];

  // Deliveries where users clicked links
  // Example: [123]
  away_delivery_id?: number[];

  // Deliveries where users did not click links
  // Example: [123]
  ignore_away_delivery_id?: number[];

  // UTM tag IDs from Senler
  // Example: [0, 123]
  utm_id?: number[];

  // Subscription source
  // Examples: 'subscriptions', 'widget', 'api', etc.
  source?: SourceType[];

  // Campaign source
  // Example: ['vk']
  utm_source?: string[];

  // Traffic type
  // Example: ['cpc']
  utm_medium?: string[];

  // Campaign name
  // Example: ['skidka_po_karte']
  utm_campaign?: string[];

  // Advertisement identifier
  // Example: ['banner']
  utm_content?: string[];

  // Keyword
  // Example: ['bill tables online']
  utm_term?: string[];

  // Date of subscription from, format: d.m.Y H:i:s
  // Example: 26.11.2018 10:00:00
  date_subscription_from?: string;

  // Date of subscription to, format: d.m.Y H:i:s
  // Example: 27.11.2018 10:00:00
  date_subscription_to?: string;

  // Date of first subscription from, format: d.m.Y H:i:s
  date_first_from?: string;

  // Date of first subscription to, format: d.m.Y H:i:s
  date_first_to?: string;

  // Date of delivery from, format: d.m.Y H:i:s
  date_delivery_from?: string;

  // Date of delivery to, format: d.m.Y H:i:s
  date_delivery_to?: string;

  // Date of first delivery from, format: d.m.Y H:i:s
  date_first_delivery_from?: string;

  // Date of first delivery to, format: d.m.Y H:i:s
  date_first_delivery_to?: string;

  // Date of last delivery from, format: d.m.Y H:i:s
  date_last_delivery_from?: string;

  // Date of last delivery to, format: d.m.Y H:i:s
  date_last_delivery_to?: string;

  // Date of link click from, format: d.m.Y H:i:s
  date_away_from?: string;

  // Date of link click to, format: d.m.Y H:i:s
  date_away_to?: string;

  // Bot ID
  // Example: 1
  bot_id?: number;

  // Bot step IDs for the given bot
  // Example: ['5c6992770b295058e641bb86']
  step_id?: string[];

  // Exclude subscribers from this bot
  // Example: 1
  ignore_bot_id?: number;

  // Exclude steps for the bot in ignore_bot_id
  // Example: ['5c6992770b295058e641bb86']
  ignore_step_id?: string[];

  // Subscriber status filter, 1 for Active, 2 for Inactive
  lead_status?: number;

  // Name of the variable
  // Example: 'age'
  var_name?: string;

  // Value of the variable
  // Example: '30'
  var_value?: string;
}

export interface GetSubscribersResponse {
  // The offset that needs to be transmitted to select the next set
  // Example: 5c6992770b295058e641bb86
  offset_id: string;

  items: Subscriber[];
}
