// https://help.senler.ru/senler/dev/api/methods/boty/udalit-podpischika-iz-bota

export interface DelSubscriberRequest {
  vk_user_id: string;
  bot_id: string;
}

export interface DelSubscriberResponse {}
