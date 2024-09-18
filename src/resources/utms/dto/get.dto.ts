// https://help.senler.ru/senler/dev/api/methods/metki/poluchenie-metok

import { UtmTagStructure } from './get.utm.dto';

/**
 * Returns a list of all utm tags
 */
export interface GetUtmRequestParams {
  /**
   * Number of elements to return information about
   *
   * Maximum: 100
   *
   * Example: 50
   */
  count?: number;

  /**
   * Offset - how many elements to sample from
   *
   * Default: 0 | max: 100,000
   *
   * Example: 50
   */
  offset?: number;

  /**
   * Utm tag ids
   *
   * Example: [123]
   */
  utm_id?: Array<number>;
}

export interface GetUtmResponse {
  success: boolean;
  /**
   * Number of all elements in the sample
   *
   * Example: `'20'`
   */
  count: string;
  items: Array<UtmTagStructure>;
}
