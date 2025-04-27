# Senler SDK
![Tests workflow](https://github.com/Alexey-zaliznuak/senler-sdk/actions/workflows/test.yml/badge.svg)
![Build status](https://github.com/Alexey-zaliznuak/senler-sdk/actions/workflows/publish.yml/badge.svg)
[![npm version](https://img.shields.io/npm/v/senler-sdk.svg?style=flat-square)](https://www.npmjs.org/package/senler-sdk)
[![npm downloads](https://img.shields.io/npm/dm/senler-sdk.svg?style=flat-square)](https://npm-stat.com/charts.html?package=senler-sdk)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=senler-sdk&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=senler-sdk)

## Description
`SenlerSDK' is a TypeScript library for easy interaction with the [Senler API](https://help.senler.ru/senler/dev/api ). It provides a modular structure for working with various Senler resources, such as subscribers, mailing lists, messages, etc.

## Installation

### npm

```bash
npm install senler-sdk
```

## Usage examples

### Initializing the client API

To work with the API, you will need the `access_token` and `vk_group_id` of your VKontakte community.

```typescript
import { SenlerApiClientV2 } from "senler-sdk"

const client = new SenlerApiClientV2({
  accessToken: "YOUR_ACCESS_TOKEN",
  vkGroupId: "YOUR_VK_GROUP_ID",
})

```
### Get subscribers

```typescript
client.subscribers.get().then((res) => console.log(res))
```

## Integration with passport

### Installation

```bash
npm i passport passport-senler
```

### Use api client for get subscribers with received access token

```typescript
import express from 'express';
import passport from 'passport';
import { SenlerStrategy } from 'passport-senler';

passport.use(
  new SenlerStrategy({
    clientID: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECRET',
    callbackURL: 'https://yourapp.com/auth/senler/callback',
  })
);

const app = express();


app.get('/auth/senler', passport.authenticate('senler'));


app.get(
  '/auth/senler/callback',
  passport.authenticate('senler', {
    failureRedirect: '/auth/senler/error',
    session: false, // Disable session (senler does not used it)
  }),

  async (req, res) => {
    const client = new SenlerApiClientV2({
      accessToken: req.accessToken,
      vkGroupId: "YOUR_VK_GROUP_ID",
    })

    res.json(await client.subscribers.get())
  }
);

app.listen(3000, () => {
  console.log('Server is starting on port: 3000');
});
```

## Error handling

To handle errors correctly, use `try-catch` blocks or `.catch()` methods.
```typescript

const client = new SenlerApiClientV2({
  accessToken: "YOUR_TOKEN",
  vkGroupId: "YOUR_VK_GROUP_ID",
})

const app = express();

app.get('/get', async (_req, res) => {
  try {
    res.json(await client.subscribers.get())
  }
  catch (error: any) {
    res.send(error.message)
  }
});
```

Errors implemented via `success`, `error_code` and `error_message` ([docs](https://help.senler.ru/senler/dev/api/vozvrashaemye-oshibki)) are converted and throws out as an ApiError with the corresponding message.

## Logging
Logging is based on [pino](https://www.npmjs.com/package/pino), you can overwrite the [default configuration](src/configs.ts).

### Example:
```typescript
const loggingConfig = {
  level: 'info',
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
const client = new SenlerApiClientV2(apiConfig, loggingConfig, retryConfig, cacheConfig);
```

## Retrying
Retrying is based on [axios-retry](https://www.npmjs.com/package/axios-retry), you can overwrite the [default configuration](src/configs.ts).

###  Example:
```typescript
const retryConfig = {
  retries: 3,
  retryDelay(retryCount, error): number {
    return axiosRetry.exponentialDelay(retryCount, error, 100);
  }
}
const client = new SenlerApiClientV2(apiConfig, loggingConfig, retryConfig, cacheConfig);
```

## Caching
Caching is based on [cache-manager](https://www.npmjs.com/package/cache-manager):

```typescript
const cacheConfig = {
  enabled: true,
  manager: createCache({ ttl: 10_000 })
}
const client = new SenlerApiClientV2(apiConfig, loggingConfig, retryConfig, cacheConfig);
```

You can also provide custom cache config in any routes:
```typescript
await client.subscribers.get({count: 30}, cacheConfig)
```

## License

This project is licensed under the MIT license. See [LICENSE](./LICENSE) for details.
