// https://help.senler.ru/senler/dev/api/methods/metki/udalenie-metki

export interface DeleteUtmRequestParams {
  /**
   * utm id
   *
   * example: 123
   */
  utm_id: number;
}

export interface DeleteUtmResponse {
  success: boolean;
}
