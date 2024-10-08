// https://help.senler.ru/senler/dev/api/methods/metki/dobavlenie-metki

/** Add utm tag */
export interface AddUtmRequest {
  /** Example: tag 1 */
  name: string;
}

export interface AddUtmResponse {
  /** Created utm id */
  utm_id: string;
}
