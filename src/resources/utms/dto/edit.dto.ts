// https://help.senler.ru/senler/dev/api/methods/metki/redaktirovat-metku

export interface EditUtmRequestParams {
  /**
   * utm id
   *
   * example: 123
   */
  utm_id: number;

  /**
   * new label name
   *
   * example: label 1
   */
  name: string;
}

export interface EditUtmResponse {
  success: boolean;
}
