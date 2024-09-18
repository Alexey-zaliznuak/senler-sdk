export interface UtmTagWithSubscribeCountStructure {
  /**
   * Senler utm tag id
   *
   * Example: `123`
   */
  utm_id: number;

  /**
   * Number of subscriptions made
   *
   * Example: `312`
   */

  count_subscribe: number;

  /**
   * Number of cancelled subscriptions
   *
   * Example: `2`
   */

  count_unsubscribe: number;
}
