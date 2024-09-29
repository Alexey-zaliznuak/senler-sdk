/** https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov/ustanovka-peremennoi */

export interface SetVarRequest {
  vk_user_id: number;
  name: string;
  value: string;
}

export interface SetVarResponse {}
