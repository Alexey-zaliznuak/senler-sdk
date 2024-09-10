import nock from 'nock';

import { getSubscribersMock } from '../../mocks/resources/subscribers/get-subscribers.mock';
import { SenlerApiClient } from '../../../src';
import { buildMockSuccessResponse, buildSenlerApiQueryParams } from '../../utils';

describe('Get subscribers tests', () => {
  let client: SenlerApiClient;

  beforeEach(() => {
    client = new SenlerApiClient({
      accessToken: process.env.SENLER_TESTS_ACCESS_TOKEN!,
      vkGroupId: process.env.SENLER_TESTS_VK_GROUP_ID!
    });
  });

  it('should return mocked user data', async () => {
    const mockResponse = getSubscribersMock;

    nock(client.httpClient.baseUrl)
      .get('/subscribers/get?' + buildSenlerApiQueryParams())
      .reply(200, buildMockSuccessResponse(mockResponse));
    const result = await client.subscribers.get();

    expect(result).toEqual(mockResponse);
  });
});
