// tests/myApi.test.js
import nock from 'nock';
import { getSubscribersMock } from '../../mocks/resources/subscribers/get-subscribers.mock';
import { HttpClient } from '../../../src/core/HttpClient';


describe('Get subscribers tests', () => {
  let client: HttpClient;

  beforeEach(() => {
    client = new HttpClient({
      accessToken: process.env.SENLER_TESTS_ACCESS_TOKEN!,
      vkGroupId: process.env.SENLER_TESTS_VK_GTOUP_ID!,
    });
  });

  it('should return mocked user data', async () => {
    const mockResponse = getSubscribersMock;

    nock().get('/user').reply(200, mockResponse);

    // Вызываем наш метод и проверяем результат
    const result = await fetchUserData();

    // Ожидаем, что результат будет соответствовать мокированным данным
    expect(result).toEqual(mockResponse);
  });

  it('should throw an error when API request fails', async () => {
    // Мокируем ошибку с кодом 500
    nock('https://api.example.com')
      .get('/user')
      .reply(500);

    // Проверяем, что метод выбрасывает ошибку при неудачном запросе
    await expect(fetchUserData()).rejects.toThrow('API request failed');
  });
});
