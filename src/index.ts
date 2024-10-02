export { ApiClientConfig, SenlerApiClient } from './client';

// import pino from 'pino';
// import { SenlerApiClient } from './client';
// import { createCache } from 'cache-manager';
// import { RetryConfig } from './configs';

// const cacheConfig = {
//   enabled: true,
//   manager: createCache({ ttl: 10000000 })
// }
// const retryConfig: RetryConfig = {
//   retries: 3,
//   delayFactor: 10_000,
// }
// const apiConfig = {
//   accessToken: '123',
//   vkGroupId: '123'
// }

// const loggingConfig = {
//   level: 'info',
//   destination: pino.destination("./log.log"),
//   base: { pid: false },
//   transport: {
//     target: 'pino-pretty',
//     options: {
//       colorize: true,
//       indent: 4
//     }
//   }
// }
// // const client = new SenlerApiClient(apiConfig, cacheConfig, retryConfig, loggingConfig);

// // client.subscribers.add({ vk_user_id: 571385862, subscription_id: 2987241 }).then((res) => console.log(res))
// // client.subscribers.del({ vk_user_id: 571385862, subscription_id: 2987241 }).then((res) => console.log(res))
// // client.subscribers.getSubscriptionsStatistics({
// // SENLER-SDK-CACHE:subscribers/get:{}:{\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"delete\":{},\"get\":{},\"head\":{},\"post\":{},\"put\":{},\"patch\":{}},\"params\":{\"access_token\":\"cc01a027deb2f9aaba2160293f1090dbd100b2bdca826f25\",\"vk_group_id\":\"209371835\",\"v\":\"2.0\"}}
// //   date_from: "10.10.2000",
// // SENLER-SDK-CACHE:subscribers/get:{}:{\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"},\"delete\":{},\"get\":{},\"head\":{},\"post\":{},\"put\":{},\"patch\":{}},\"params\":{\"access_token\":\"cc01a027deb2f9aaba2160293f1090dbd100b2bdca826f25\",\"vk_group_id\":\"209371835\",\"v\":\"2.0\"}}
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
