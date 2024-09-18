import { SubscriptionSourceType } from 'src/resources/share/types';

export interface SubscriptionStructure {
  /**
   * Subscription date
   *
   * Format: `d.m.Y H:i:s` example: `27.11.2018 10:00:00`
   */
  date: string;

  /**
   * VKontakte subscriber ID
   *
   * Example: `1`
   */
  vk_user_id: number;

  /**
   * Subscriber name
   *
   * Example: `John`
   */
  first_name: string;

  /**
   * Subscriber's last name
   *
   * Example: `Doe`
   */
  last_name: string;

  /**
   * Link to subscriber image
   *
   * Example: `https://sun6-6.userapi.com`
   */
  photo: string;

  /**
   * Subscriber group ID
   *
   * Example: `123`
   */
  subscription_id: number;

  /**
   * Action. 1 - subscribe, 2 - unsubscribe
   *
   * Example: `1`
   */
  action: number;

  /**
   * If the user is blacklisted - value "1", otherwise "0" (at the time of subscription)
   *
   * Example: `0`
   */
  ignore: number;

  /**
   * Subscription source
   *
   * * `subscriptions` List of groups in the application
   * * `ubscription` Direct link to the subscriber group
   * * `widget` Widget in the community
   * * `keyword` Keyword
   * * `api` API
   * * `site` Website
   * * `hand` Manual
   * * `other` Other
   *
   * Example: `subscription`
   */
  source: SubscriptionSourceType;

  /**
   * Senler tag id
   *
   * Example: `123`
   */
  utm_id: number;

  /**
   * Campaign source
   *
   * Example: `vk`
   */
  utm_source?: string;

  /**
   * Traffic type
   *
   * Example: `cpc`
   */
  utm_medium?: string;

  /**
   * Campaign name
   *
   * Example: `skidka_po_karte`
   */
  utm_campaign?: string;

  /**
   * Ad ID
   *
   * Example: `banner`
   */
  utm_content?: string;

  /**
   * Keyword
   *
   * Example: `order a chair online`
   */
  utm_term?: string;
}
