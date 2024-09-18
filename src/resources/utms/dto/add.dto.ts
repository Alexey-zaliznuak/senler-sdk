// https://help.senler.ru/senler/dev/api/methods/metki/dobavlenie-metki

export interface AddUtmRequestParams {
  /**
   * Example: tag 1
   */
  name: string;
}

export interface AddUtmResponse {
  success: boolean;

  /**
   * Created Utm id
   */
  utm_id: string
}
