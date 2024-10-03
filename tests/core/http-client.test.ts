import nock from 'nock';
import { HttpClient } from '../../src/core/http-client';
import axiosRetry from 'axios-retry';
import { createCache } from 'cache-manager';

const RETRIES_COUNT = 2;

describe('Retrying', () => {
  let client: HttpClient;

  beforeEach(() => {
    client = new HttpClient({ accessToken: '123', vkGroupId: '123', baseUrl: 'https://localhost' }, undefined, {
      retries: RETRIES_COUNT,
      retryDelay(retryCount, error): number {
        return axiosRetry.exponentialDelay(retryCount, error, 100);
      }
    });
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('should return the result when first request success', async () => {
    nock('https://localhost')
      .post('/test', () => true)
      .query(true)
      .reply(200, { success: true, data: 'value' });

    const result = await client.request('test');

    expect(result).toEqual({ data: 'value' });
  });

  it('should return the result when retrying success', async () => {
    nock('https://localhost')
      .post('/test', () => true)
      .query(true)
      .reply(500)
      .post('/test', () => true)
      .query(true)
      .reply(500)
      .post('/test', () => true)
      .query(true)
      .reply(200, { success: true, data: 'value' });

    const result = await client.request('test');

    expect(result).toEqual({ data: 'value' });
  });

  it('should return the result when retrying by 5xx, 429', async () => {
    nock('https://localhost')
      .post('/test', () => true)
      .query(true)
      .reply(500)
      .post('/test', () => true)
      .query(true)
      .reply(429)
      .post('/test', () => true)
      .query(true)
      .reply(200, { success: true, data: 'value' });

    const result = await client.request('test');

    expect(result).toEqual({ data: 'value' });
  });
});


describe('Caching', () => {
  let client: HttpClient;

  beforeEach(() => {
    client = new HttpClient({ accessToken: '123', vkGroupId: '123', baseUrl: 'https://localhost' }, undefined, { retries: 0 }, {enabled: true, manager: createCache()});
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('should successfully return the result without cache', async () => {
    nock('https://localhost')
      .post('/test', () => true)
      .query(true)
      .reply(200, { success: true, data: 'value' });

    const result = await client.request('test');

    expect(result).toEqual({ data: 'value' });
  });

  it('should return the result without request if cache exists', async () => {
    nock('https://localhost')
      .post('/test', () => true)
      .query(true)
      .reply(200, { success: true, data: 'value' })
      .post('/test', () => true)
      .query(true)
      .reply(200, { success: true, data: 'no cached value' })

    await client.request('test');  // Set cache
    const result = await client.request('test');

    expect(result).toEqual({ data: 'value' });
  });
});
