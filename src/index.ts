import pino from 'pino';
import { SenlerApiClient } from './client';
import axiosRetry from 'axios-retry';


axiosRetry.exponentialDelay()


const client = new SenlerApiClient(
  {
    accessToken: 'b073f4357218a678eb6b62c87cfac81528010ff52970aa53',
    vkGroupId: '209371835'
  },
  undefined,
  {
    level: 'fatal',
    destination: pino.destination("./log.log"),
    base: { pid: false },
    transport: {
        target: 'pino-pretty',
        options: {
        colorize: true,
        indent: 4
      }
    }
  }
);

client.subscribers.get().then(_res => console.log('Result----'))

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
