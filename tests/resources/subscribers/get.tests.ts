// tests/myApi.test.js
import nock from 'nock';
import { fetchUserData } from '../src/lib/myApi';

describe('API Interaction Tests with Nock', () => {
  it('should return mocked user data', async () => {
    // Настраиваем nock для мокирования запроса к внешнему API
    const mockResponse = { id: 1, name: 'John Doe' };

    // Мокируем GET-запрос к https://api.example.com/user
    nock('https://api.example.com')
      .get('/user')
      .reply(200, mockResponse);

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
