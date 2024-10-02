export { BaseResponse } from './core/response/base-response';

// Bots
export { AddSubscriberRequest, AddSubscriberResponse } from './resources/bots/dto/addSubscriber.dto';
export { DelSubscriberRequest, DelSubscriberResponse } from './resources/bots/dto/delSubscriber.dto';
export { BotInfo } from './resources/bots/dto/get.botInfo.dto';
export { GetBotsListRequest, GetBotsListResponse } from './resources/bots/dto/get.dto';
export { GetStepsRequest, GetStepsResponse } from './resources/bots/dto/getSteps.dto';
export { Step } from './resources/bots/dto/getSteps.step.dto';
export { StepType } from './resources/bots/dto/getSteps.step.type.dto';

// Deliveries
export { Delivery } from './resources/deliveries/dto/get.delivery.dto';
export { DeliveryStatus } from './resources/deliveries/dto/get.delivery.status.dto';
export { DeliveryType } from './resources/deliveries/dto/get.delivery.type.dto';
export { GetDeliveriesRequest, GetDeliveriesResponse } from './resources/deliveries/dto/get.dto';
export { DeliveriesStatus } from './resources/deliveries/dto/get.status.dto';
export { DeliveriesType } from './resources/deliveries/dto/get.type.dto';
export { DeliveryToUserAgent } from './resources/deliveries/dto/stat.deliveryToUserAgent.dto';
export { GetRecipientStatisticsRequest, RecipientStatisticsResponse } from './resources/deliveries/dto/stat.dto';
export { DeliveryCountStatisticsResponse, GetDeliveryCountStatisticsRequest } from './resources/deliveries/dto/statCount.dto';

// Subscribers
export { AddSubscribersInGroupRequest, AddSubscribersInGroupResponse, AddSubscribersInGroupUserOperationDetails } from './resources/subscribers/dto/add.dto';
export { DelSubscriberFromSubscriptionGroupRequest, DelSubscriberFromSubscriptionGroupResponse } from './resources/subscribers/dto/del.dto';
export { GetSubscribersRequest, GetSubscribersResponse } from './resources/subscribers/dto/get.dto';
export { GetSubscriptionsCountStatisticRequest, GetSubscriptionsCountStatisticResponse } from './resources/subscribers/dto/statCount.dto';
export { GetSubscriptionsStatisticResponse, GetSubscriptionsStatisticsRequest } from './resources/subscribers/dto/statSubscribe.dto';

// Subscriptions
export { AddSubscribersGroupRequest, AddSubscribersGroupResponse } from './resources/subscriptions/dto/add.dto';
export { DelSubscribersGroupRequest, DelSubscribersGroupResponse } from './resources/subscriptions/dto/del.dto';
export { EditSubscribersGroupRequest, EditSubscribersGroupResponse } from './resources/subscriptions/dto/edit.dto';
export { GetSubscribersGroupsRequest, GetSubscribersGroupsResponse } from './resources/subscriptions/dto/get.dto';
export { BaseEditableSubscribersGroup } from './resources/subscriptions/dto/subscription.base-editable';
export { Subscription } from './resources/subscriptions/dto/subscription.dto';

// Utms
export { AddUtmRequest, AddUtmResponse } from './resources/utms/dto/add.dto';
export { DeleteUtmRequest, DeleteUtmResponse } from './resources/utms/dto/del.dto';
export { EditUtmRequest, EditUtmResponse } from './resources/utms/dto/edit.dto';
export { GetUtmRequest, GetUtmResponse } from './resources/utms/dto/get.dto';
export { UtmTag } from './resources/utms/dto/get.utm.dto';
export { GetLinkUtmRequest, GetLinkUtmResponse } from './resources/utms/dto/getLink.dto';
export { GetUtmSubscriptionsCountStatisticRequest, GetUtmSubscriptionsCountStatisticResponse } from './resources/utms/dto/statCount.dto';
export { UtmTagWithSubscribeCount } from './resources/utms/dto/statCount.subscription.dto';
export { GetUtmSubscriptionsStatisticsRequest, SubscriptionsStatisticsResponse } from './resources/utms/dto/statSubscribe.dto';

// Vars
export { DeleteVarRequest, DeleteVarResponse } from './resources/vars/dto/del.dto';
export { GetVarRequest, GetVarResponse } from './resources/vars/dto/get.dto';
export { Var } from './resources/vars/dto/get.var.dto';
export { SetVarRequest, SetVarResponse } from './resources/vars/dto/set.dto';

// Global vars
export { DeleteGlobalVarRequest, DeleteGlobalVarResponse } from './resources/globalVars/dto/del.dto';
export { GetGlobalVarRequest, GetGlobalVarResponse } from './resources/globalVars/dto/get.dto';
export { GlobalVar } from './resources/globalVars/dto/get.globalVar.dto';
export { SetGlobalVarRequest, SetGlobalVarResponse } from './resources/globalVars/dto/set.dto';

export { SubscriptionSourceType } from './resources/share/types';
