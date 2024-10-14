/** https://help.senler.ru/senler/dev/api/methods/podpischiki/statistika-podpisok */

import { GetSubscribersStatisticsBaseRequest } from './getStatsBase.dto';

export class GetSubscriptionsCountStatisticRequest extends GetSubscribersStatisticsBaseRequest {}

export interface GetSubscriptionsCountStatisticResponse {
  count_subscribe: number;
  count_unsubscribe: number;
}
