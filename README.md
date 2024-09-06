
# Senler API Client
### Сгенерино через ИИ, просто для вида

## Описание

`SenlerApi` — это TypeScript-библиотека для удобного взаимодействия с [Senler API](https://help.senler.ru/senler/dev/api). Она предоставляет модульную структуру для работы с различными ресурсами Senler, такими как подписчики, рассылки и сообщения, с использованием access_token и vk_group_id для авторизации.

## Установка

Для установки библиотеки используйте npm или yarn:

### npm

```bash
npm install senler-api-client
```

### yarn

```bash
yarn add senler-api-client
```

## Использование

### Инициализация API клиента

Для работы с API вам потребуется `access_token` и `vk_group_id` вашего сообщества ВКонтакте.

```typescript
import { SenlerApi } from 'senler-api-client';

const senlerApi = new SenlerApi('your-access-token', 'your-vk-group-id');

// Пример использования методов
senlerApi.subscribers.getSubscribers().then(subscribers => {
  console.log('Subscribers:', subscribers);
});

senlerApi.campaigns.createCampaign({ title: 'New Campaign', message: 'Hello, World!' }).then(campaign => {
  console.log('Campaign created:', campaign);
});
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

```typescript
senlerApi.subscribers.getSubscribers()
  .then(subscribers => console.log('Subscribers:', subscribers))
  .catch(error => console.error('Error fetching subscribers:', error));
```

## Тестирование

Для тестирования проекта используйте [Jest](https://jestjs.io/). Пример команды для запуска тестов:

```bash
npm run test
```

## Лицензия

Этот проект лицензируется под лицензией MIT. См. [LICENSE](./LICENSE) для подробностей.

