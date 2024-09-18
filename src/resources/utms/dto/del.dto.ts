// https://help.senler.ru/senler/dev/api/methods/metki/udalenie-metki

/**
 * Removes the utm tag by `utm_id`
 */
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
