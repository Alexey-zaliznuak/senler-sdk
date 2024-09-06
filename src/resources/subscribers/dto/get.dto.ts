export interface GetSubscribersRequestParams {
  // Number of elements to return, max: 100, example: 50
  count?: number;

  // Offset for fetching the next set, example: '5c6992770b295058e641bb86'
  offset_id?: string;

  // VK user IDs, example: [1, 2]
  vk_user_id?: number[];

  // Subscriber group IDs, 0 for no group, example: [0, 123]
  subscription_id?: number[];

  // Exclude subscribers from these groups, example: [0, 123]
  ignore_subscription_id?: number[];

  // IDs of deliveries received by subscribers, example: [123]
  delivery_id?: number[];

  // Exclude subscribers who received these deliveries, example: [123]
  ignore_delivery_id?: number[];

  // Deliveries with errors, example: [123]
  error_delivery_id?: number[];

  // IDs of deliveries read by users, example: [123]
  read_delivery_id?: number[];

  // Deliveries not read by users, example: [123]
  ignore_read_delivery_id?: number[];

  // Deliveries where users clicked links, example: [123]
  away_delivery_id?: number[];

  // Deliveries where users did not click links, example: [123]
  ignore_away_delivery_id?: number[];

  // UTM tag IDs from Senler, example: [0, 123]
  utm_id?: number[];

  // Subscription source, examples: 'subscriptions', 'widget', 'api', etc.
  source?: string[];

  // Campaign source, example: ['vk']
  utm_source?: string[];

  // Traffic type, example: ['cpc']
  utm_medium?: string[];

  // Campaign name, example: ['skidka_po_karte']
  utm_campaign?: string[];

  // Advertisement identifier, example: ['banner']
  utm_content?: string[];

  // Keyword, example: ['заказать стул онлайн']
  utm_term?: string[];

  // Date of subscription from, format: d.m.Y H:i:s, example: 26.11.2018 10:00:00
  date_subscription_from?: string;

  // Date of subscription to, format: d.m.Y H:i:s, example: 27.11.2018 10:00:00
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

  // Bot ID, example: 1
  bot_id?: number;

  // Bot step IDs for the given bot, example: ['5c6992770b295058e641bb86']
  step_id?: string[];

  // Exclude subscribers from this bot, example: 1
  ignore_bot_id?: number;

  // Exclude steps for the bot in ignore_bot_id, example: ['5c6992770b295058e641bb86']
  ignore_step_id?: string[];

  // Subscriber status filter, 1 for Active, 2 for Inactive
  lead_status?: number;

  // Name of the variable, example: 'age'
  var_name?: string;

  // Value of the variable, example: '30'
  var_value?: string;
}

export interface GetSubscribersResponse {}
