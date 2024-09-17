export interface UtmTagWithSubscribeCountStructure {
  /**
   * Senler utm tag id
   *
   * example: `123`
   */
  utm_id: number;

  /**
   * number of subscriptions made
   *
   * example: `312`
   */

  count_subscribe: number;

  /**
   * number of cancelled subscriptions
   *
   * example: `2`
   */

  count_unsubscribe: number;
}
