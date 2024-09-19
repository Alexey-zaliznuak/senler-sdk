/** https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/dobavlenie-gruppy-podpischikov */


export interface AddSubscribersGroupRequest{
  /** Name of group of subscriptions */
  name: string;

  /**
   * Title on the subscription page
   *
   * Сan be omitted if it matches the title
   *
   * Example: `Test`
   */
  title?: string;

  /**
   * Text on the Subscribe button
   *
   * Example: `Lets`
   */
  btn_ok?: string;

  /**
   * Text on the Unsubscribe button
   *
   * Example: `Unsubscribe`
   */
  btn_cancel?: string;

  /**
   * Hidden group of subscribers
   * This group will not be shown on the main page of the application
   */
  inactive?: boolean;

  /** Don't show the number of subscribers in the app */
  hide_subscriptions?: boolean;

  /**
   * The banner on the subscription page
   * Is a link to a video (YouTube, Vimeo) or an image
   */
  video_key?: string;

  /** Do not show the notification after subscribing and unsubscribing */
  disabled_notify?: boolean;

  /**
   * Short description for the widget of the first version
   *
   * Example: `Click Subscribe`
   */
  short_description?: string;

  /**
   * Description for the subscription page
   *
   * Example: `To participate, click Subscribe`
   */
  description?: string;

  /**
   * The ID of the VKontakte pixel
   *
   * Example: `VK-RTRG-XXXXXX-XXXXX`
   */
  vk_pixel?: string;

  /**
   * The numeric ID of the Facebook pixel
   *
   * Example: `23463685326`
   */
  fb_pixel?: number;

  /**
   * The numeric ID of Yandex. metrica
   *
   * Example: `345373123342`
   */
  ya_metrica?: number;

  /**
   * Google Analytics ID
   *
   * Example: `UA-XXXXXXXX-X`
   */
  ga_metrica?: string;

  /**
   * Link to the page after subscribing
   *
   * Example: `https://www.example.com`
   */
  url_after_subscribing?: string;

  /**
   * Link to the page after unsubscribing
   *
   * Example: `https://www.example.com`
   */
  url_after_unsubscribing?: string;

  /** Limit the subscription time */
  limit_period?: boolean;

  /**
   * Subscription start date, format: d.m.Y H:i:s
   *
   * Example: `27.11.2018 10:00:00`
   */
  limit_period_from?: string;

  /**
   * Subscription end date, format: d.m.Y H:i:s
   *
   * Example: `27.11.2018 10:00:00`
   */
  limit_period_to?: string;

  /**
   * An array of numeric IDs of subscriber groups
   * for automatic exclusion when subscribing to the current group
   *
   * Example: `[453731,5432]`
   */
  exclude_subscription_id?: number[];

  /**
   * An array of numeric IDs of bots that will be launched when subscribing
   *
   * Example: `[34576]`
   */
  bot_ids?: number[]
}

export interface AddSubscribersGroupResponse {
  subscription_id: string;
}
