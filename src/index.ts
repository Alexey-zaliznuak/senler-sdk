export { ApiClientConfig, SenlerApiClient } from './client';

import pino from 'pino';
import { SenlerApiClient } from './client';

const client = new SenlerApiClient(
  {
    accessToken: 'cc01a027deb2f9aaba2160293f1090dbd100b2bdca826f25',
    vkGroupId: '209371835'
  },
  {
    level: 'fatal',
    destination: pino.destination('./log.log'),
    base: { pid: false },
    transport: {
      target: 'pino-pretty',
      options: {
        clear: true,
        indent: 4
      }
    }
  },
  undefined,
  { enabled: true }
);

client.subscribers.get().then(_res => console.log(_res));

// client.subscribers.add({ vk_user_id: 571385862, subscription_id: 2987241 }).then((res) => console.log(res))
// client.subscribers.del({ vk_user_id: 571385862, subscription_id: 2987241 }).then((res) => console.log(res))
// client.subscribers.getSubscriptionsStatistics({
//   date_from: "10.10.2000",
//   date_to: "10.11.3000",
// }
// ).then((res) => console.log(res))

// client.subscribersGroups.get().then(res => console.log(res));
// client.utms.getSubscriptionsCountStatistics({
//     date_from: "10.10.2000",
//     date_to: "10.11.3000",
//   }).then((res) => console.log(res));

// client.subscribers.
// client.subscribers.
