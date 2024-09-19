// https://help.senler.ru/senler/dev/api/methods/metki/poluchenie-ssylki-dlya-metki

/** Getting a link to a subscription page with a tag */
export interface GetLinkUtmRequest {
  utm_id: string;

  /**
   * Subscriber group id
   *
   * Example: `'123'`
   */
  subscription_id: string;

  /**
   * Automatic subscription on transition: 0 - no, 1 - yes (default: 0)
   *
   * Example: `1`
   */
  force?: number;
}

export interface GetLinkUtmResponse {
  success: boolean;

  /** Link to a group of subscribers with a utm tag */
  link: number;
}
