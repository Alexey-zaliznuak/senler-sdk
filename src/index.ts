export { ApiClientConfig, SenlerApiClient } from './client';

import { SenlerApiClient } from './client';

const client = new SenlerApiClient({
  accessToken: 'b3d3d339878abf9b8356768eaa21480e8bc0ec8d16696640',
  vkGroupId: '218001424',
});

// client.subscribers.get().then((res) => console.log(res))
// client.subscribers.add({ vk_user_id: 571385862, subscription_id: 2987241 }).then((res) => console.log(res))
// client.subscribers.del({ vk_user_id: 571385862, subscription_id: 2987241 }).then((res) => console.log(res))
// client.subscribers.getSubscriptionsStatistics({
//   date_from: "10.10.2000",
//   date_to: "10.11.3000",
// }
// ).then((res) => console.log(res))


client.bots.get().then((res) => console.log(res));

// client.subscribers.
// client.subscribers.
