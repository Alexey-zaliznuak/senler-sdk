/**
 * Structure of the received utm tag
 */
export interface UtmTagStructure {
  /**
   * Utm identifier - tags
   *
   * Example: `'123'`
   */
  utm_id: string;

  /**
   * Label name
   *
   * Example: `'label 1'`
   */
  name: string;

  /**
   * Default subscriber group id
   *
   * Example: `'123'`
   */
  subscription_id: string;

  /**
   * Subscription counter
   *
   * Example: `'421'`
   */
  count: string;
}
