# Methods

### [Subscribers](https://help.senler.ru/senler/dev/api/methods/podpischiki)
- **`get(data?: GetSubscribersRequest)`** — Get list of subscribers.

- **`addInGroup(data: AddSubscribersInGroupRequest)`** — Add subscriber(s) in group.

- **`delFromGroup(data: DelSubscriberFromSubscriptionGroupRequest)`** — Del subscriber from group of subscribers.

- **`getSubscriptionsStatistics(data: GetSubscriptionsStatisticsRequest)`** — Get statistics on registration and cancellation of subscriptions.

- **`getSubscriptionsCountStatistics(data: GetSubscriptionsStatisticsRequest)`** — Get statistics on count of registration and cancellation of subscriptions.

### [Subscribers groups](https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov)
- **`get(data?: GetSubscribersGroupsRequest)`** — Getting list of subscribers groups.

- **`add(data: AddSubscribersGroupRequest)`** — Add subscribers group.

- **`edit(data: EditSubscribersGroupRequest)`** — Edit subscribers group.

- **`del(data: DelSubscribersGroupRequest)`** — Del subscribers group.

### [Utms](https://help.senler.ru/senler/dev/api/methods/metki)
- **`get(data?: GetUtmRequest)`** — Getting list of utm tags.

- **`add(data: AddUtmRequest)`** — Add utm tag.

- **`edit(data: EditUtmRequest)`** — Edit utm tag.

- **`del(data: DeleteUtmRequest)`** — Del utm tag.

- **`getLink(data: GetLinkUtmRequest)`** — Get link to a subscription page with a utm.

- **`getSubscriptionsCountStatistics(data: GetSubscriptionsCountStatisticsRequest)`** — Get statistics on the count of subscriptions with utm tags.

- **`getSubscriptionsStatistics(data: GetSubscriptionsStatisticsRequest)`** — Get statistics on user actions with utm tags.

### [Deliveries](https://help.senler.ru/senler/dev/api/methods/rassylki)
- **`get(data?: GetDeliveriesRequest)`** — Get list of deliveries.

- **`getSubscriptionsStatistics(data: GetRecipientStatisticsRequest)`** — Delivery statistic with user info.

- **`getSubscriptionsCountStatistics(data: GetDeliveryCountStatisticsRequest)`** — Delivery count statistic.

### [Vars](https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov)
- **`get(data?: GetVarRequest)`** — Get a user variable.

- **`set(data: SetVarRequest)`** — Delivery statistic with user info.

- **`del(data: DeleteVarRequest)`** — Delete a user variable.

### [Global vars](https://help.senler.ru/senler/dev/api/methods/globalnye-peremennye-podpischikov)
- **`get(data?: GetDeliveriesRequest)`** — Get list of deliveries.

- **`getSubscriptionsStatistics(data: GetRecipientStatisticsRequest)`** — Delivery statistic with user info.

- **`getSubscriptionsCountStatistics(data: GetDeliveryCountStatisticsRequest)`** — Delivery count statistic.

### [Bots](https://help.senler.ru/senler/dev/api/methods/boty)
- **`get(data?: GetBotsListRequest)`** — .

- **`getSteps(data: GetStepsRequest)`** — Delivery statistic with user info.

- **`addSubscriber(data: AddSubscriberRequest)`** — Delivery count statistic.

- **`delSubscriber(data: DelSubscriberRequest)`** — Delivery count statistic.
