/** https://help.senler.ru/senler/dev/api/methods/podpischiki/statistika-podpisok */

import { GetSubscribersStatisticsBaseRequest, GetSubscribersStatisticsBaseRequestSchema } from './getStatsBase.dto';

export interface GetSubscriptionsCountStatisticsRequest extends GetSubscribersStatisticsBaseRequest {}

export const GetSubscriptionsCountStatisticsRequestSchema = GetSubscribersStatisticsBaseRequestSchema.required();

export interface GetSubscriptionsCountStatisticsResponse {
  count_subscribe: number;
  count_unsubscribe: number;
}
