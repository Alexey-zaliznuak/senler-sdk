// https://help.senler.ru/senler/dev/api/methods/podpischiki/statistika-podpisok

import { GetSubscribersStatisticsBaseRequestParams } from "./getStatsBase.dto";


export interface GetSubscriptionsCountStatisticsRequestParams extends GetSubscribersStatisticsBaseRequestParams {}

export interface GetSubscriptionsCountStatisticResponse {
  count_subscribe: number;
  count_unsubscribe: number;
}
