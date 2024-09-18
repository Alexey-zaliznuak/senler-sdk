// https://help.senler.ru/senler/dev/api/methods/metki/poluchenie-ssylki-dlya-metki

export interface GetLinkUtmRequestParams {
  /**
   * utm tag id
   *
   * example: `123`
   */
  utm_id: number;

  /**
   * subscriber group id
   *
   * example: `123`
   */
  subscription_id: number;

  /**
   * Автоматическая подписка при переходе: 0 - нет, 1 - да (по умолчанию: 0)
   *
   * пример: `1`
   */
  force?: Array<number>;
}

export interface GetLinkUtmResponse {
  success: boolean;
  /**
   * Link to a group of subscribers with a label
   */
  link: number;
}
