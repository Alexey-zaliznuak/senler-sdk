export { BaseResponse } from './core/response/base-response';

// Subscribers
export { AddSubscribersInGroupRequest, AddSubscribersInGroupResponse, AddSubscribersInGroupUserOperationDetails } from './resources/subscribers/dto/add.dto';
export { DelSubscriberFromSubscriptionGroupRequest, DelSubscriberFromSubscriptionGroupResponse } from './resources/subscribers/dto/del.dto';
export { GetSubscribersRequest, GetSubscribersResponse } from './resources/subscribers/dto/get.dto';
export { GetSubscriptionsCountStatisticResponse, GetSubscriptionsCountStatisticsRequest } from './resources/subscribers/dto/statCount.dto';
export { GetSubscriptionsStatisticResponse, GetSubscriptionsStatisticsRequest } from './resources/subscribers/dto/statSubscribe.dto';

export { SubscriptionSourceType } from './resources/share/types';
