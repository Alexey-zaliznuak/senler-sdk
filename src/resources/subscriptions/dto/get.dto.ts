/** https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/poluchenie-spiska-grupp-podpischikov */

import { Subscription } from "./subscription.dto";


export interface GetSubscriptionsRequestParams{
  /**
   * Number of elements to return
   *
   * Max: `100`
   */
  count?: number;

  /**
   * From what number of elements you need to make a selection
   *
   * Default: `0`
   *
   * Max: `100.000`
   *
   * Example: `50`
   */
  offset?: string;

  /**
   * Subscriber group IDs, 0 for no group
   *
   * Example: `[1, 2]`
   */
  subscription_id?: number[];
}

export interface GetSubscriptionsResponse {
  count: number;
  items: Subscription[];
}
