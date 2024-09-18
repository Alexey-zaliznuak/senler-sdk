// https://help.senler.ru/senler/dev/api/methods/metki/redaktirovat-metku

/**
 * Changes the utm tag by its `utm_id`
 */
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
