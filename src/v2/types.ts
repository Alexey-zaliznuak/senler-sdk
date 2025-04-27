export { BaseResponse } from './core/response/base-response';

// Bots
export { AddSubscriberRequest, AddSubscriberRequestSchema, AddSubscriberResponse } from './resources/bots/dto/addSubscriber.dto';
export { DelSubscriberRequest, DelSubscriberRequestSchema, DelSubscriberResponse } from './resources/bots/dto/delSubscriber.dto';
export { BotInfo } from './resources/bots/dto/get.botInfo.dto';
export { GetBotsListRequest, GetBotsListRequestSchema, GetBotsListResponse } from './resources/bots/dto/get.dto';
export { GetStepsRequest, GetStepsRequestSchema, GetStepsResponse } from './resources/bots/dto/getSteps.dto';
export { Step } from './resources/bots/dto/getSteps.step.dto';
export { StepType } from './resources/bots/dto/getSteps.step.type.dto';

// Deliveries
export { Delivery } from './resources/deliveries/dto/get.delivery.dto';
export { DeliveryStatus } from './resources/deliveries/dto/get.delivery.status.dto';
export { DeliveryType } from './resources/deliveries/dto/get.delivery.type.dto';
export { GetDeliveriesRequest, GetDeliveriesRequestSchema, GetDeliveriesResponse } from './resources/deliveries/dto/get.dto';
export { DeliveriesStatus } from './resources/deliveries/dto/get.status.dto';
export { DeliveriesType } from './resources/deliveries/dto/get.type.dto';
export { DeliveryToUserAgent } from './resources/deliveries/dto/stat.deliveryToUserAgent.dto';
export { GetRecipientStatisticsRequest, GetRecipientStatisticsRequestSchema, RecipientStatisticsResponse } from './resources/deliveries/dto/stat.dto';
export { DeliveryCountStatisticsResponse, GetDeliveryCountStatisticsRequest, GetDeliveryCountStatisticsRequestSchema } from './resources/deliveries/dto/statCount.dto';

// Subscribers
export { AddSubscribersInGroupRequest, AddSubscribersInGroupRequestSchema, AddSubscribersInGroupResponse, AddSubscribersInGroupUserOperationDetails } from './resources/subscribers/dto/add.dto';
export { DelSubscriberFromSubscriptionGroupRequest, DelSubscriberFromSubscriptionGroupRequestSchema, DelSubscriberFromSubscriptionGroupResponse } from './resources/subscribers/dto/del.dto';
export { GetSubscribersRequest, GetSubscribersRequestSchema, GetSubscribersResponse } from './resources/subscribers/dto/get.dto';
export { GetSubscriptionsCountStatisticsRequest, GetSubscriptionsCountStatisticsRequestSchema, GetSubscriptionsCountStatisticsResponse } from './resources/subscribers/dto/statCount.dto';
export { GetSubscriptionsStatisticsRequest, GetSubscriptionsStatisticsRequestSchema, GetSubscriptionsStatisticsResponse } from './resources/subscribers/dto/statSubscribe.dto';

// Subscriptions
export { AddSubscribersGroupRequest, AddSubscribersGroupRequestSchema, AddSubscribersGroupResponse } from './resources/subscriptions/dto/add.dto';
export { DelSubscribersGroupRequest, DelSubscribersGroupRequestSchema, DelSubscribersGroupResponse } from './resources/subscriptions/dto/del.dto';
export { EditSubscribersGroupRequest, EditSubscribersGroupRequestSchema, EditSubscribersGroupResponse } from './resources/subscriptions/dto/edit.dto';
export { GetSubscribersGroupsRequest, GetSubscribersGroupsRequestSchema, GetSubscribersGroupsResponse } from './resources/subscriptions/dto/get.dto';
export { BaseEditableSubscribersGroup, BaseEditableSubscribersGroupSchema } from './resources/subscriptions/dto/subscription.base-editable';
export { Subscription } from './resources/subscriptions/dto/subscription.dto';

// Utms
export { AddUtmRequest, AddUtmRequestSchema, AddUtmResponse } from './resources/utms/dto/add.dto';
export { DeleteUtmRequest, DeleteUtmRequestSchema, DeleteUtmResponse } from './resources/utms/dto/del.dto';
export { EditUtmRequest, EditUtmRequestSchema, EditUtmResponse } from './resources/utms/dto/edit.dto';
export { GetUtmRequest, GetUtmRequestSchema, GetUtmResponse } from './resources/utms/dto/get.dto';
export { UtmTag } from './resources/utms/dto/get.utm.dto';
export { GetLinkUtmRequest, GetLinkUtmRequestSchema, GetLinkUtmResponse } from './resources/utms/dto/getLink.dto';
export { GetUtmSubscriptionsCountStatisticsRequest, GetUtmSubscriptionsCountStatisticsRequestSchema, GetUtmSubscriptionsCountStatisticsResponse } from './resources/utms/dto/statCount.dto';
export { UtmTagWithSubscribeCount } from './resources/utms/dto/statCount.subscription.dto';
export { GetUtmSubscriptionsStatisticsRequest, GetUtmSubscriptionsStatisticsRequestSchema, SubscriptionsStatisticsResponse } from './resources/utms/dto/statSubscribe.dto';

// Vars
export { DeleteVarRequest, DeleteVarRequestSchema, DeleteVarResponse } from './resources/vars/dto/del.dto';
export { GetVarRequest, GetVarRequestSchema, GetVarResponse } from './resources/vars/dto/get.dto';
export { Var } from './resources/vars/dto/get.var.dto';
export { SetVarRequest, SetVarRequestSchema, SetVarResponse } from './resources/vars/dto/set.dto';

// Global vars
export { DeleteGlobalVarRequest, DeleteGlobalVarRequestSchema, DeleteGlobalVarResponse } from './resources/globalVars/dto/del.dto';
export { GetGlobalVarRequest, GetGlobalVarRequestSchema, GetGlobalVarResponse } from './resources/globalVars/dto/get.dto';
export { GlobalVar } from './resources/globalVars/dto/get.globalVar.dto';
export { SetGlobalVarRequest, SetGlobalVarRequestSchema, SetGlobalVarResponse } from './resources/globalVars/dto/set.dto';

export { SubscriptionSourceType } from './resources/share/types';
