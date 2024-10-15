/** https://help.senler.ru/senler/dev/api/methods/podpischiki/statistika-podpisok */

import { IsInt, IsOptional, Max } from 'class-validator';
import { GetSubscribersStatisticsBaseRequest } from './getStatsBase.dto';

import { SubscriptionAction } from 'src/resources/share/types';

export class GetSubscriptionsStatisticsRequest extends GetSubscribersStatisticsBaseRequest {
  /**
   * Number of elements to return
   *
   * Max: `100`
   */
  @IsOptional()
  @IsInt()
  @Max(100)
  count?: number;

  /**
   * Offset for fetching a subset of conversations
   *
   * Example: `10`
   */
  @IsOptional()
  @IsInt()
  offset?: number;
}

export interface GetSubscriptionsStatisticResponse {
  items: SubscriptionAction[];
}
