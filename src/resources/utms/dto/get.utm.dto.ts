export interface UtmTagStructure {
  /**
   * utm identifier - tags
   *
   * example: 123
   */
  utm_id: number;

  /**
   * label name
   *
   * example: label 1
   */
  name: string;

  /**
   * default subscriber group id
   *
   * example: 123
   */
  subscription_id: number;

  /**
   * subscription counter
   *
   * example: 421
   */
  count: number;
}
