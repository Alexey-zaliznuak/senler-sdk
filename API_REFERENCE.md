# Methods

### [Subscribers](https://help.senler.ru/senler/dev/api/methods/podpischiki)

- **`[get](https://help.senler.ru/senler/dev/api/methods/podpischiki/poluchenie-podpischikov)(data: [GetSubscribersRequest](src\resources\subscribers\subscribers.api.ts))`** — Get list of subscribers.

- **`[addInGroup](https://help.senler.ru/senler/dev/api/methods/podpischiki/dobavlenie-podpischika)(data: [AddSubscribersInGroupRequest](src\resources\subscribers\dto\add.dto.ts))`** — Add subscriber(s) in group.

- **`[delFromGroup](https://help.senler.ru/senler/dev/api/methods/podpischiki/udalenie-podpischika)(data: [DelSubscriberFromSubscriptionGroupRequest](src\resources\subscribers\dto\del.dto.ts))`** — Del subscriber from group of subscribers.

- **`[getSubscriptionsStatistics](https://help.senler.ru/senler/dev/api/methods/podpischiki/statistika-podpisok)(data: [GetSubscriptionsStatisticsRequest](src\resources\subscribers\dto\statSubscribe.dto.ts))`** — Get statistics on registration and cancellation of subscriptions.

- **`[getSubscriptionsCountStatistics](https://help.senler.ru/senler/dev/api/methods/podpischiki/statcount)(data: [GetSubscriptionsCountStatisticRequest](src\resources\subscribers\dto\statCount.dto.ts))`** — Get statistics on count of registration and cancellation of subscriptions.

### [Subscribers groups](https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov)
- **`[get](https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/poluchenie-spiska-grupp-podpischikov)(data?: [GetSubscribersGroupsRequest](src\resources\subscriptions\dto\get.dto.ts))`** — Getting list of subscribers groups.

- **`[add](https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/dobavlenie-gruppy-podpischikov)(data: [AddSubscribersGroupRequest](src\resources\subscriptions\dto\add.dto.ts))`** — Add subscribers group.

- **`[edit](https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/redaktirovanie-gruppy-podpischikov)(data: [EditSubscribersGroupRequest](src\resources\subscriptions\dto\edit.dto.ts))`** — Edit subscribers group.

- **`[del](https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/udalenie-gruppy-podpischikov)(data: [DelSubscribersGroupRequest](src\resources\subscriptions\dto\del.dto.ts))`** — Del subscribers group.

### [Utms](https://help.senler.ru/senler/dev/api/methods/metki)
- **`[get](https://help.senler.ru/senler/dev/api/methods/metki/poluchenie-metok)(data?: [GetUtmRequest](src\resources\utms\dto\get.dto.ts))`** — Getting list of utm tags.

- **`[add](https://help.senler.ru/senler/dev/api/methods/metki/dobavlenie-metki)(data: [AddUtmRequest](src\resources\utms\dto\add.dto.ts))`** — Add utm tag.

- **`[edit](https://help.senler.ru/senler/dev/api/methods/metki/redaktirovat-metku)(data: [EditUtmRequest](src\resources\utms\dto\edit.dto.ts))`** — Edit utm tag.

- **`[del](https://help.senler.ru/senler/dev/api/methods/metki/udalenie-metki)(data: [DeleteUtmRequest](src\resources\utms\dto\del.dto.ts))`** — Del utm tag.

- **`[getLink](https://help.senler.ru/senler/dev/api/methods/metki/poluchenie-ssylki-dlya-metki)(data: [GetLinkUtmRequest](src\resources\utms\dto\getLink.dto.ts))`** — Get link to a subscription page with a utm.

- **`[getSubscriptionsCountStatistics](https://help.senler.ru/senler/dev/api/methods/metki/statistika-metok)(data: [GetSubscriptionsCountStatisticsRequest](src\resources\utms\dto\statCount.dto.ts))`** — Get statistics on the count of subscriptions with utm tags.

- **`[getSubscriptionsStatistics](https://help.senler.ru/senler/dev/api/methods/metki/podpischiki-s-metkami)(data: [GetSubscriptionsStatisticsRequest](src\resources\utms\dto\statSubscribe.dto.ts))`** — Get statistics on user actions with utm tags.

### [Deliveries](https://help.senler.ru/senler/dev/api/methods/rassylki)
- **`[get](https://help.senler.ru/senler/dev/api/methods/rassylki/poluchenie-spiska-rassylok)(data?: [GetDeliveriesRequest](src\resources\deliveries\dto\get.dto.ts))`** — Get list of deliveries.

- **`[getSubscriptionsStatistics](https://help.senler.ru/senler/dev/api/methods/rassylki/statistika-dostavki)(data: [GetRecipientStatisticsRequest](src\resources\deliveries\dto\stat.dto.ts))`** — Delivery statistic with user info.

- **`[getSubscriptionsCountStatistics](https://help.senler.ru/senler/dev/api/methods/rassylki/statcount)(data: [GetDeliveryCountStatisticsRequest](src\resources\deliveries\dto\statCount.dto.ts))`** — Delivery count statistic.

### [Vars](https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov)
- **`[get](https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov/poluchenie-peremennoi)(data?: [GetVarRequest](src\resources\vars\dto\get.dto.ts))`** — Get a user variable.

- **`[set](https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov/ustanovka-peremennoi)(data: [SetVarRequest](src\resources\vars\dto\set.dto.ts))`** — Delivery statistic with user info.

- **`[del](https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov/udalenie-peremennoi)(data: [DeleteVarRequest](src\resources\vars\dto\del.dto.ts))`** — Delete a user variable.

### [Global vars](https://help.senler.ru/senler/dev/api/methods/globalnye-peremennye-podpischikov)
- **`[get](https://help.senler.ru/senler/dev/api/methods/globalnye-peremennye-podpischikov/poluchenie-peremennoj)(data?: [GetDeliveriesRequest](src\resources\globalVars\dto\get.dto.ts))`** — Get a global variable.

- **`[set](https://help.senler.ru/senler/dev/api/methods/globalnye-peremennye-podpischikov/ustanovka-peremennoj)(data: [SetGlobalVarRequest](src\resources\globalVars\dto\set.dto.ts))`** — Set a global variable.

- **`[del](https://help.senler.ru/senler/dev/api/methods/globalnye-peremennye-podpischikov/udalenie-peremennoi)(data: [DeleteGlobalVarRequest](src\resources\globalVars\dto\del.dto.ts))`** — Delete a global variable.

### [Bots](https://help.senler.ru/senler/dev/api/methods/boty)
- **`[get](https://help.senler.ru/senler/dev/api/methods/boty/poluchenie-spiska-botov)(data?: [GetBotsListRequest](src\resources\bots\dto\get.dto.ts))`** — Get a list of bots.

- **`[getSteps](https://help.senler.ru/senler/dev/api/methods/boty/poluchenie-spiska-shagov-v-bote)(data: [GetStepsRequest](src\resources\bots\dto\getSteps.dto.ts))`** — Get a list of steps in a bot.

- **`[addSubscriber](https://help.senler.ru/senler/dev/api/methods/boty/dobavlenie-podpischika-v-bota)(data: [AddSubscriberRequest](src\resources\bots\dto\addSubscriber.dto.ts))`** — Add a subscriber to the bot.

- **`[delSubscriber](https://help.senler.ru/senler/dev/api/methods/boty/udalit-podpischika-iz-bota)(data: [DelSubscriberRequest](src\resources\bots\dto\delSubscriber.dto.ts))`** — Remove subscriber from bot.
