export { SenlerApiClient, ApiClientConfig } from './client';

import { SenlerApiClient } from './client';

const client = new SenlerApiClient({
  accessToken: "8015a481f140169861638153404d07b55270f42c08330047",
  vkGroupId: "209371835",
})

// client.subscribers.get().then((res) => console.log(res))
// client.subscribers.add({ vk_user_id: 571385862, subscription_id: 2987241 }).then((res) => console.log(res))
// client.subscribers.del({ vk_user_id: 571385862, subscription_id: 2987241 }).then((res) => console.log(res))
// client.subscribers.getSubscriptionsStatistics({
//   date_from: "10.10.2000",
//   count: 1,
//   date_to: "10.11.3000",
// }
// ).then((res) => console.log(res))
client.subscribers.