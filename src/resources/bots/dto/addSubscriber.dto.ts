// https://help.senler.ru/senler/dev/api/methods/boty/dobavlenie-podpischika-v-bota

export interface AddSubscriberRequest {
  vk_user_id: string;
  bot_id: string;

  /**
   * `true` add subscriber to bot again if subscriber is already in bot
   *
   * `false` default
   */
  enforce?: boolean;

  /**
   * Step id in bot
   *
   * Example: `5c35bb800b295034fa5062a6`
   */
  step_id?: string;
}
export interface AddSubscriberResponse {}
