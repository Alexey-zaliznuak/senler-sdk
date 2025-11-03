// export { ApiClientConfig, SenlerApiClient } from './v2/client';

import { SenlerApiClientV2 } from './v2/client';

// import pino from 'pino';
// import { SenlerApiClient } from './v2/client';

// const client = new SenlerApiClientV2({
//   apiConfig: {
//     accessToken: 'cc01a027deb2f9aaba2160293f1090dbd100b2bdca826f25',
//     vkGroupId: 209371835,
//   },
//   loggingConfig: {
//     level: 'info',
//     destination: pino.destination('./log.log'),
//     base: { pid: false },
//     transport: {
//       target: 'pino-pretty',
//       options: {
//         clear: true,
//         indent: 4,
//       },
//     },
//   },
// });

const client = new SenlerApiClientV2({
  apiConfig: {
    accessToken: '6c83de74eef332da7898cd596e98c6fbf400f5e5e548fd1c',
    vkGroupId: 139157852,
  },
});

// client.subscribersGroups.get().then((_res) => console.log(_res.items));

client.vars.set({ vk_user_id: 571385862, name: "sdk-test", value: "" }).then((res) => console.log(res))
// // client.subscribers.del({ vk_user_id: 571385862, subscription_id: 2987241 }).then((res) => console.log(res))
// // client.subscribers.getSubscriptionsStatistics({
// //   date_from: "10.10.2000",
// //   date_to: "10.11.3000",
// // }
// // ).then((res) => console.log(res))

// // client.subscribersGroups.get().then(res => console.log(res));
// // client.utms.getSubscriptionsCountStatistics({
// //     date_from: "10.10.2000",
// //     date_to: "10.11.3000",
// //   }).then((res) => console.log(res));

// // client.subscribers.
// // client.subscribers.
