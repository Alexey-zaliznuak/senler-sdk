// https://help.senler.ru/senler/dev/api/methods/metki/redaktirovat-metku

export interface EditUtmRequestParams {
  /**
   * Utm id
   *
   * Example: `'123'`
   */
  utm_id: string;

  /**
   * New label name
   *
   * Example: label 1
   */
  name: string;
}

export interface EditUtmResponse {
  success: boolean;
}
