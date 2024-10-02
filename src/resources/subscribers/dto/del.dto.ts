/** https://help.senler.ru/senler/dev/api/methods/podpischiki/udalenie-podpischika */

export interface DelSubscriberFromSubscriptionGroupRequest {
  /**
   * VKontakte user ID
   *
   * Examples: 1; [1, 2, 3]
   */
  vk_user_id: number | Array<number>;

  /**
   * ID of the subscriber group (0 - full unsubscription from all groups)
   *
   * Example: `123`
   */
  subscription_id: number | string;
}

export interface DelSubscriberFromSubscriptionGroupResponse {}
