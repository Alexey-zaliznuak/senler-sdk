/** https://help.senler.ru/senler/dev/api/methods/podpischiki/statistika-podpisok */

import { GetSubscribersStatisticsBaseRequestParams } from './getStatsBase.dto';

import { SubscriptionAction } from 'src/resources/share/types';

export interface GetSubscriptionsStatisticsRequestParams extends GetSubscribersStatisticsBaseRequestParams {
  /**
   * Number of elements to return
   *
   * Max: `100`
   */
  count?: number;

  /**
   * Offset for fetching a subset of conversations
   *
   * Example: `10`
   */
  offset?: number;
}

export interface GetSubscriptionsStatisticResponse {
  items: SubscriptionAction[];
}
