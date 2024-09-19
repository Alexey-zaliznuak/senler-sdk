// https://help.senler.ru/senler/dev/api/methods/metki/udalenie-metki

/** Remove the utm tag by `utm_id`*/
export interface DeleteUtmRequestParams {
  utm_id: string;
}

export interface DeleteUtmResponse {
  success: boolean;
}
