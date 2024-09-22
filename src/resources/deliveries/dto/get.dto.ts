// https://help.senler.ru/senler/dev/api/methods/rassylki/poluchenie-spiska-rassylok

import { Delivery } from './get.delivery.dto'
import { DeliveriesStatus } from './get.status.dto';
import { DeliveriesType } from './get.type.dto';

/** Return a list of all utm tags */
export interface GetDeliveriesRequest {
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

  delivery_id?: Array<number>;

  type?: Array<DeliveriesType>;

  status?: Array<keyof typeof DeliveriesStatus>;
}

export interface GetDeliveriesResponse {
  success: boolean;

  /**
   * Number of all elements in the sample
   *
   * Example: `'20'`
   */
  count: string;

  items: Array<Delivery>;
}
