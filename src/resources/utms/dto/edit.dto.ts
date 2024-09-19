// https://help.senler.ru/senler/dev/api/methods/metki/redaktirovat-metku

/** Change the utm tag by its `utm_id` */
export interface EditUtmRequestParams {
  utm_id: string;

  /**
   * New utm tag name
   *
   * Example: `'label 1'`
   */
  name: string;
}

export interface EditUtmResponse {
  success: boolean;
}
