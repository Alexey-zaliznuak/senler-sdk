import { SubscriptionSourceType } from 'src/resources/share/types';

export interface SubscriptionStructure {
  /**
   * Subscription date
   *
   * format: `d.m.Y H:i:s` example: `27.11.2018 10:00:00`
   */
  date: string;

  /**
   * VKontakte subscriber ID
   *
   * example: `1`
   */
  vk_user_id: number;

  /**
   * Subscriber name
   *
   * example: `John`
   */
  first_name: string;

  /**
   * Subscriber's last name
   *
   * example: `Doe`
   */
  last_name: string;

  /**
   * Link to subscriber image
   *
   * example: `https://sun6-6.userapi.com`
   */
  photo: string;

  /**
   * Subscriber group ID
   *
   * example: `123`
   */
  subscription_id: number;

  /**
   * Action. 1 - subscribe, 2 - unsubscribe
   *
   * example: `1`
   */
  action: number;

  /**
   * If the user is blacklisted - value "1", otherwise "0" (at the time of subscription)
   *
   * example: `0`
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
   * example: `subscription`
   */
  source: SubscriptionSourceType;

  /**
   * Senler tag id
   *
   * example: `123`
   */
  utm_id: number;

  /**
   * Campaign source
   *
   * example: `vk`
   */
  utm_source: string;

  /**
   * Traffic type
   *
   * example: `cpc`
   */
  utm_medium: string;

  /**
   * Campaign name
   *
   * example: `skidka_po_karte`
   */
  utm_campaign: string;

  /**
   * Ad ID
   *
   * example: `banner`
   */
  utm_content: string;

  /**
   * Keyword
   *
   * example: `order a chair online`
   */
  utm_term: string;
}
