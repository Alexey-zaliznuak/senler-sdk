# Methods

### [Subscribers](https://help.senler.ru/senler/dev/api/methods/podpischiki)

- **`addInGroup(data: [AddSubscribersInGroupRequest](src\resources\subscribers\dto\add.dto.ts))`** — Add subscriber(s) in group.

- **`delFromGroup(data: [DelSubscriberFromSubscriptionGroupRequest](src\resources\subscribers\dto\del.dto.ts))`** — Del subscriber from group of subscribers.

- **`getSubscriptionsStatistics(data: [GetSubscriptionsStatisticsRequest](src\resources\subscribers\dto\statSubscribe.dto.ts))`** — Get statistics on registration and cancellation of subscriptions.

- **`getSubscriptionsCountStatistics(data: [GetSubscriptionsCountStatisticRequest](src\resources\subscribers\dto\statCount.dto.ts))`** — Get statistics on count of registration and cancellation of subscriptions.

### [Subscribers groups](https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov)
- **`get(data?: [GetSubscribersGroupsRequest](src\resources\subscriptions\dto\get.dto.ts))`** — Getting list of subscribers groups.

- **`add(data: [AddSubscribersGroupRequest](src\resources\subscriptions\dto\add.dto.ts))`** — Add subscribers group.

- **`edit(data: [EditSubscribersGroupRequest](src\resources\subscriptions\dto\edit.dto.ts))`** — Edit subscribers group.

- **`del(data: [DelSubscribersGroupRequest](src\resources\subscriptions\dto\del.dto.ts))`** — Del subscribers group.

### [Utms](https://help.senler.ru/senler/dev/api/methods/metki)
- **`get(data?: [GetUtmRequest](src\resources\utms\dto\get.dto.ts))`** — Getting list of utm tags.

- **`add(data: [AddUtmRequest](src\resources\utms\dto\add.dto.ts))`** — Add utm tag.

- **`edit(data: [EditUtmRequest](src\resources\utms\dto\edit.dto.ts))`** — Edit utm tag.

- **`del(data: [DeleteUtmRequest](src\resources\utms\dto\del.dto.ts))`** — Del utm tag.

- **`getLink(data: [GetLinkUtmRequest](src\resources\utms\dto\getLink.dto.ts))`** — Get link to a subscription page with a utm.

- **`getSubscriptionsCountStatistics(data: [GetSubscriptionsCountStatisticsRequest]())`** — Get statistics on the count of subscriptions with utm tags.

- **`getSubscriptionsStatistics(data: [GetSubscriptionsStatisticsRequest](src\resources\utms\dto\statSubscribe.dto.ts))`** — Get statistics on user actions with utm tags.

### [Deliveries](https://help.senler.ru/senler/dev/api/methods/rassylki)
- **`get(data?: [GetDeliveriesRequest](src\resources\deliveries\dto\get.dto.ts))`** — Get list of deliveries.

- **`getSubscriptionsStatistics(data: [GetRecipientStatisticsRequest](src\resources\deliveries\dto\stat.dto.ts))`** — Delivery statistic with user info.

- **`getSubscriptionsCountStatistics(data: [GetDeliveryCountStatisticsRequest](src\resources\deliveries\dto\statCount.dto.ts))`** — Delivery count statistic.

### [Vars](https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov)
- **`get(data?: [GetVarRequest](src\resources\vars\dto\get.dto.ts))`** — Get a user variable.

- **`set(data: [SetVarRequest](src\resources\vars\dto\set.dto.ts))`** — Delivery statistic with user info.

- **`del(data: [DeleteVarRequest](src\resources\vars\dto\del.dto.ts))`** — Delete a user variable.

### [Global vars](https://help.senler.ru/senler/dev/api/methods/globalnye-peremennye-podpischikov)
- **`get(data?: [GetDeliveriesRequest](src\resources\globalVars\dto\get.dto.ts))`** — Get a global variable.

- **`set(data: [SetGlobalVarRequest](src\resources\globalVars\dto\set.dto.ts))`** — Set a global variable.

- **`del(data: [DeleteGlobalVarRequest](src\resources\globalVars\dto\del.dto.ts))`** — Delete a global variable.

### [Bots](https://help.senler.ru/senler/dev/api/methods/boty)
- **`get(data?: [GetBotsListRequest](src\resources\bots\dto\get.dto.ts))`** — Get a list of bots.

- **`getSteps(data: [GetStepsRequest](src\resources\bots\dto\getSteps.dto.ts))`** — Get a list of steps in a bot.

- **`addSubscriber(data: [AddSubscriberRequest](src\resources\bots\dto\addSubscriber.dto.ts))`** — Add a subscriber to the bot.

- **`delSubscriber(data: [DelSubscriberRequest](src\resources\bots\dto\delSubscriber.dto.ts))`** — Remove subscriber from bot.
