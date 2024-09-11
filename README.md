# Senler SDK
## Description
`SenlerSDK' is a TypeScript library for easy interaction with the [Senler API](https://help.senler.ru/senler/dev/api ). It provides a modular structure for working with various Senler resources, such as subscribers, mailing lists, messages, etc.

## Installation

### npm

```bash
npm install senler-sdk
```

## Usage

### Initializing the client API

To work with the API, you will need the `access_token` and `vk_group_id` of your VKontakte community.

```typescript
import { SenlerApiClient } from "senler-sdk"


const client = new SenlerApiClient({
  accessToken: process.env.SENLER_TESTS_ACCESS_TOKEN!,
  vkGroupId: process.env.SENLER_TESTS_VK_GTOUP_ID!
})

client.subscribers.get().then((res) => console.log(res))

```

## Methods

### Subscribers
- **`client.subscribers.get(params?: GetSubscribersRequestParams): Promise<GetSubscribersResponse>`** — Get subscribers list.

### Error handling

All API methods return promises. To handle errors correctly, use `try-catch` blocks or `.catch()` methods.
Errors implemented via success, error_code, error_message ([see](https://help.senler.ru/senler/dev/api/vozvrashaemye-oshibki ).) are converted and throws out as an ApiError with the corresponding message.

## Testing

[Jest] is used to test the project(https://jestjs.io /).

```bash
npm run test
```

## License

This project is licensed under the MIT license. See [LICENSE](./LICENSE) for details.