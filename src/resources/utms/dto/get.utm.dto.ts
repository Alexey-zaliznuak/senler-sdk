/** Utm tag with a subscriber counter for a specific group */
export interface UtmTag {
  utm_id: string;

  /**
   * Utm tag name
   *
   * Example: `label 1`
   */
  name: string;

  /**
   * Default subscriber group id
   *
   * Example: `123`
   */
  subscription_id: string;

  /**
   * Subscription counter
   *
   * Example: `421`
   */
  count: string;
}
