// https://help.senler.ru/senler/dev/api/methods/metki/poluchenie-metok

import { UtmTagStructure } from './get.utm.dto';

export interface GetUtmRequestParams {
  /**
   * number of elements to return information about
   *
   * maximum: 100
   *
   * example: 50
   */
  count?: number;

  /**
   * offset - how many elements to sample from
   *
   * default: 0 | max: 100,000
   *
   * example: 50
   */
  offset?: number;

  /**
   * utm tag ids
   *
   * example: [123]
   */
  utm_id?: Array<number>;
}

export interface GetUtmResponse {
  success: boolean;
  /**
   * number of all elements in the sample
   *
   * example: 20
   */
  count: number;
  items: Array<UtmTagStructure>;
}
