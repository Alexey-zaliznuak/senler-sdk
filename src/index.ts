export { ApiClientConfig, SenlerApiClient } from './client';

import { SenlerApiClient } from './client';

const client = new SenlerApiClient({
  accessToken: 'cc01a027deb2f9aaba2160293f1090dbd100b2bdca826f25',
    vkGroupId: '209371835'
});

// client.subscribers.get().then((res) => console.log(res))
// client.subscribers.add({ vk_user_id: 571385862, subscription_id: 2987241 }).then((res) => console.log(res))
// client.subscribers.del({ vk_user_id: 571385862, subscription_id: 2987241 }).then((res) => console.log(res))
// client.subscribers.getSubscriptionsStatistics({
//   date_from: "10.10.2000",
//   date_to: "10.11.3000",
// }
// ).then((res) => console.log(res))

// eslint-disable-next-line no-console
client.bots.get({}).then((res) => console.log(res));
client.deliveries.get({}).then((res) => console.log(res));
client.globalVars.get({}).then((res) => console.log(res));
client.subscribers.get({}).then((res) => console.log(res));
client.subscribersGroups.get({}).then((res) => console.log(res));
client.utms.get({}).then((res) => console.log(res));
client.vars.get({ vk_user_id: '' }).then((res) => console.log(res));

// client.subscribers.
// client.subscribers.
