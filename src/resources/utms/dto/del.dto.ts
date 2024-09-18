// https://help.senler.ru/senler/dev/api/methods/metki/udalenie-metki

export interface DeleteUtmRequestParams {
  /**
   * Utm id
   *
   * Example: `'123'`
   */
  utm_id: string;
}

export interface DeleteUtmResponse {
  success: boolean;
}
