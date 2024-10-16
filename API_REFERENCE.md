# Methods

### <a href="https://help.senler.ru/senler/dev/api/methods/podpischiki">Subscribers</a>

- <code><a href="https://help.senler.ru/senler/dev/api/methods/podpischiki/poluchenie-podpischikov">get</a>(data: <a href="src\resources\subscribers\dto\get.dto.ts">GetSubscribersRequest</a>)</code> — Get list of subscribers.

- <code><a href="https://help.senler.ru/senler/dev/api/methods/podpischiki/dobavlenie-podpischika">addInGroup</a>(data: <a href="src\resources\subscribers\dto\add.dto.ts">AddSubscribersInGroupRequest</a>)</code> — Add subscriber(s) in group.

- <code><a href="https://help.senler.ru/senler/dev/api/methods/podpischiki/udalenie-podpischika">delFromGroup</a>(data: <a href="src\resources\subscribers\dto\del.dto.ts">DelSubscriberFromSubscriptionGroupRequest</a>)</code> — Del subscriber from group of subscribers.

- <code><a href="https://help.senler.ru/senler/dev/api/methods/podpischiki/statistika-podpisok">getSubscriptionsStatistics</a>(data: <a href="src\resources\subscribers\dto\statSubscribe.dto.ts">GetSubscriptionsStatisticsRequest</a>)</code> — Get statistics on registration and cancellation of subscriptions.

- <code><a href="https://help.senler.ru/senler/dev/api/methods/podpischiki/statcount">getSubscriptionsCountStatistics</a>(data: <a href="src\resources\subscribers\dto\statCount.dto.ts">GetSubscriptionsCountStatisticRequest</a>)</code> — Get statistics on count of registration and cancellation of subscriptions.

### <a href="https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov">Subscribers groups</a>

- <code><a href="https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/poluchenie-spiska-grupp-podpischikov">get</a>(data?: <a href="src\resources\subscriptions\dto\get.dto.ts">GetSubscribersGroupsRequest</a>)</code> — Getting list of subscribers groups.

- <code><a href="https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/dobavlenie-gruppy-podpischikov">add</a>(data: <a href="src\resources\subscriptions\dto\add.dto.ts">AddSubscribersGroupRequest</a>)</code> — Add subscribers group.

- <code><a href="https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/redaktirovanie-gruppy-podpischikov">edit</a>(data: <a href="src\resources\subscriptions\dto\edit.dto.ts">EditSubscribersGroupRequest</a>)</code> — Edit subscribers group.

 - <code><a href="https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/udalenie-gruppy-podpischikov">del</a>(data: <a href="src\resources\subscriptions\dto\del.dto.ts">DelSubscribersGroupRequest</a>)</code> — Del subscribers group.

### <a href="https://help.senler.ru/senler/dev/api/methods/metki">Utms</a>

- <code><a href="https://help.senler.ru/senler/dev/api/methods/metki/poluchenie-metok">get</a>(data?: <a href="src\resources\utms\dto\get.dto.ts">GetUtmRequest</a>)</code> — Getting list of utm tags.

- <code><a href="https://help.senler.ru/senler/dev/api/methods/metki/dobavlenie-metki">add</a>(data: <a href="src\resources\utms\dto\add.dto.ts">AddUtmRequest</a>)</code> — Add utm tag.

- <code><a href="https://help.senler.ru/senler/dev/api/methods/metki/redaktirovat-metku">edit</a>(data: <a href="src\resources\utms\dto\edit.dto.ts">EditUtmRequest</a>)</code> — Edit utm tag.

- <code><a href="https://help.senler.ru/senler/dev/api/methods/metki/udalenie-metki">del</a>(data: <a href="src\resources\utms\dto\del.dto.ts">DeleteUtmRequest</a>)</code> — Delete utm tag.

- <code><a href="https://help.senler.ru/senler/dev/api/methods/metki/poluchenie-ssylki-dlya-metki">getLink</a>(data: <a href="src\resources\utms\dto\getLink.dto.ts">GetLinkUtmRequest</a>)</code> — Get link to a subscription page with a utm.

- <code><a href="https://help.senler.ru/senler/dev/api/methods/metki/statistika-metok">getSubscriptionsCountStatistics</a>(data: <a href="src\resources\utms\dto\statCount.dto.ts">GetSubscriptionsCountStatisticsRequest</a>)</code> — Get statistics on the count of subscriptions with utm tags.

- <code><a href="https://help.senler.ru/senler/dev/api/methods/metki/podpischiki-s-metkami">getSubscriptionsStatistics</a>(data: <a href="src\resources\utms\dto\statSubscribe.dto.ts">GetSubscriptionsStatisticsRequest</a>)</code> — Get statistics on user actions with utm tags.

### <a href="https://help.senler.ru/senler/dev/api/methods/rassylki">Deliveries</a>

- <code><a href="https://help.senler.ru/senler/dev/api/methods/rassylki/poluchenie-spiska-rassylok">get</a>(data?: <a href="src\resources\deliveries\dto\get.dto.ts">GetDeliveriesRequest</a>)</code> — Get list of deliveries.

- <code><a href="https://help.senler.ru/senler/dev/api/methods/rassylki/statistika-dostavki">getSubscriptionsStatistics</a>(data: <a href="src\resources\deliveries\dto\stat.dto.ts">GetRecipientStatisticsRequest</a>)</code> — Delivery statistic with user info.

- <code><a href="https://help.senler.ru/senler/dev/api/methods/rassylki/statcount">getSubscriptionsCountStatistics</a>(data: <a href="src\resources\deliveries\dto\statCount.dto.ts">GetDeliveryCountStatisticsRequest</a>)</code> — Delivery count statistic.

### <a href="https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov">Vars</a>

- <code><a href="https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov/poluchenie-peremennoi">get</a>(data?: <a href="src\resources\vars\dto\get.dto.ts">GetVarRequest</a>)</code> — Get list of user variables.

- <code><a href="https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov/ustanovka-peremennoi">set</a>(data: <a href="src\resources\vars\dto\set.dto.ts">SetVarRequest</a>)</code> — Set a user variable.

- <code><a href="https://help.senler.ru/senler/dev/api/methods/peremennye-podpischikov/udalenie-peremennoi">del</a>(data: <a href="src\resources\vars\dto\del.dto.ts">DeleteVarRequest</a>)</code> — Delete a user variable.

### <a href="https://help.senler.ru/senler/dev/api/methods/globalnye-peremennye-podpischikov">Global vars</a>

- <code><a href="https://help.senler.ru/senler/dev/api/methods/globalnye-peremennye-podpischikov/poluchenie-peremennoj">get</a>(data?: <a href="src\resources\globalVars\dto\get.dto.ts">GetGlobalVarRequest</a>)</code> — Get list of global variables.

- <code><a href="https://help.senler.ru/senler/dev/api/methods/globalnye-peremennye-podpischikov/ustanovka-peremennoj">set</a>(data: <a href="src\resources\globalVars\dto\set.dto.ts">SetGlobalVarRequest</a>)</code> — Set a global variable.

- <code><a href="https://help.senler.ru/senler/dev/api/methods/globalnye-peremennye-podpischikov/udalenie-peremennoi">del</a>(data: <a href="src\resources\globalVars\dto\del.dto.ts">DeleteGlobalVarRequest</a>)</code> — Delete a global variable.

### <a href="https://help.senler.ru/senler/dev/api/methods/boty">Bots</a>

- <code><a href="https://help.senler.ru/senler/dev/api/methods/boty/poluchenie-spiska-botov">get</a>(data?: <a href="src\resources\bots\dto\get.dto.ts">GetBotsListRequest</a>)</code> — Get a list of bots.

- <code><a href="https://help.senler.ru/senler/dev/api/methods/boty/poluchenie-spiska-shagov-v-bote">getSteps</a>(data: <a href="src\resources\bots\dto\getSteps.dto.ts">GetStepsRequest</a>)</code> — Get a list of steps in a bot.

- <code><a href="https://help.senler.ru/senler/dev/api/methods/boty/dobavlenie-podpischika-v-bota">addSubscriber</a>(data: <a href="src\resources\bots\dto\addSubscriber.dto.ts">AddSubscriberRequest</a>)</code> — Add a subscriber to the bot.

- <code><a href="https://help.senler.ru/senler/dev/api/methods/boty/udalit-podpischika-iz-bota">delSubscriber</a>(data: <a href="src\resources\bots\dto\delSubscriber.dto.ts">DelSubscriberRequest</a>)</code> — Remove subscriber from bot.
