import nock from 'nock';

import { getSubscribersMock } from '../../mocks/resources/subscribers/get-subscribers.mock';
import { SenlerApiClient } from '../../../src';
import { buildSuccessResponse } from '../../utils';


describe('Get subscribers tests', () => {
  let client: SenlerApiClient;

  beforeEach(() => {
    client = new SenlerApiClient({
      accessToken: process.env.SENLER_TESTS_ACCESS_TOKEN!,
      vkGroupId: process.env.SENLER_TESTS_VK_GTOUP_ID!,
    });
  });

  it('should return mocked user data', async () => {
    const mockResponse = getSubscribersMock;

    nock(client.httpClient.baseUrl).get('/subscribers/get').reply(200, buildSuccessResponse(mockResponse));

    const result = await client.subscribers.get();

    expect(result).toEqual(mockResponse);
  });
});
