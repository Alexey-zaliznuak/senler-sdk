// https://help.senler.ru/senler/dev/api/methods/boty/dobavlenie-podpischika-v-bota

export interface AddSubscriberRequest {
  vk_user_id: string;
  bot_id: string;
  enforce?: boolean;
  step_id?: string;
}
export interface AddSubscriberResponse {}
