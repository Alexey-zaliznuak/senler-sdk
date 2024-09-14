// https://help.senler.ru/senler/dev/api/methods/podpischiki/udalenie-podpischika

export interface DelSubscriberFromSubscriptionGroupRequestParams {
  // VKontakte user ID
  // Example: 1
  vk_user_id: number | number[];

  // ID of the subscriber group (0 - full unsubscription from all groups)
  // Example: 123
  subscription_id: number;
}

export interface DelSubscriberFromSubscriptionGroupResponse {}
