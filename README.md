# Senler SDK
## Description
`SenlerSDK` — это TypeScript-библиотека для удобного взаимодействия с [Senler API](https://help.senler.ru/senler/dev/api). Она предоставляет модульную структуру для работы с различными ресурсами Senler, такими как подписчики, рассылки и сообщения и т.д

## Installation

### npm

```bash
npm install senler-sdk
```

### yarn

```bash
yarn add senler-sdk
```

## Usage

### Инициализация API клиента

Для работы с API вам потребуется `access_token` и `vk_group_id` вашего сообщества ВКонтакте.

```typescript

```

## Методы

### Подписчики (`SubscribersResource`)
- **`getSubscribers(params?: Record<string, any>): Promise<any>`** — Получить список подписчиков.
- **`addSubscriber(data: Record<string, any>): Promise<any>`** — Добавить подписчика.

### Рассылки (`CampaignsResource`)
- **`createCampaign(data: Record<string, any>): Promise<any>`** — Создать новую рассылку.

### Сообщения (`MessagesResource`)
- **`sendMessage(data: Record<string, any>): Promise<any>`** — Отправить сообщение подписчикам.

## Структура

Проект организован следующим образом:

```
src/
  resources/
    ISubscribersResource.ts
    SubscribersResource.ts
    ICampaignsResource.ts
    CampaignsResource.ts
    IMessagesResource.ts
    MessagesResource.ts
  SenlerApi.ts
  HttpClient.ts
  types.ts
```

### Обработка ошибок

Все методы API возвращают промисы. Чтобы правильно обрабатывать ошибки, используйте блоки `try-catch` или методы `.catch()`.
Ошибки реализованные через success, error_code, error_message ([см](https://help.senler.ru/senler/dev/api/vozvrashaemye-oshibki).)

## Тестирование

Для тестирования проекта используется [Jest](https://jestjs.io/).

```bash
npm run test
```

## Лицензия

Этот проект лицензируется под лицензией MIT. См. [LICENSE](./LICENSE) для подробностей.
