// https://help.senler.ru/senler/dev/api/methods/metki/statistika-metok

/** Getting statistics on the number of subscriptions to ***any*** group with the utm tag */
export interface GetDeliveryCountStatisticsRequest {
  /**
   * Date and time from which subscribed/unsubscribed
   *
   * Format: `d.m.Y H:i:s` example: `26.11.2018 10:00:00`
   */
  date_from: string;

  /**
   * Date and time before which subscribed/unsubscribed
   *
   * Format: `d.m.Y H:i:s` example: `27.11.2018 10:00:00`
   */
  date_to: string;

  /**
   * VKontakte user IDs
   *
   * Example: `[1]`
   */
  vk_user_id?: Array<number>;

  /**
   * Mailing list identifiers
   *
   * Example: `[123]`
   */
  delivery_id?: Array<number>;
}

export interface DeliveryCountStatisticsResponse {
  success: boolean;

  /**
   * Offset to pass to fetch the next set
   *
   * Example: `'5c6992770b295058e641bb86'`
   */
  offset_id: number;

  /**
   * Link to a group of subscribers with a label
   */
  count: number;
}
