export interface DeliveryToUserAgent {
  /**
   * Date and time of the subscription/unsubscription
   *
   * Format: d.m.Y H:i:s
   *
   * Example: `27.11.2018 10:00:00`
   */
  date: string;

  vk_user_id: number;

  first_name: string;
  last_name: string;

  /**
   * URL to the subscriber's profile picture
   *
   * Example: `https://sun6-6.userapi.com`
   */
  photo: string;

  delivery_id: string;

  vk_id: number;

  error: number;

  error_code: number;

  is_read: 0 | 1;

  /** Message id in dialog */
  conversation_message_id: number;
}
