export { ApiClientConfig, SenlerApiClient } from './client';

import { SenlerApiClient } from './client';

const client = new SenlerApiClient({
  accessToken: 'e63ca6c301835ae0aec4830595e47bd972547c396475511b',
  vkGroupId: '209371835',
});

// client.subscribers.get().then((res) => console.log(res))
// client.subscribers.add({ vk_user_id: 571385862, subscription_id: 2987241 }).then((res) => console.log(res))
// client.subscribers.del({ vk_user_id: 571385862, subscription_id: 2987241 }).then((res) => console.log(res))
// client.subscribers.getSubscriptionsStatistics({
//   date_from: "10.10.2000",
//   date_to: "10.11.3000",
// }
// ).then((res) => console.log(res))


client.deliveries.get({status: ['done']}).then((res) => console.log(res));

// client.subscribers.
// client.subscribers.
