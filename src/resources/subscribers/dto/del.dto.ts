export interface DelSubscriberFromSubscriptionGroupRequestParams {
  // VKontakte user ID
  // Example: 1
  vk_user_id: number;

  // ID of the subscriber group (0 - full unsubscription from all groups)
  // Example: 123
  subscription_id: number;
}

export interface DelSubscriberFromSubscriptionGroupResponse {}
