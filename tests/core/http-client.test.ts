import nock from "nock";
import { HttpClient } from "../../src/core/http-client";

const RETRIES_COUNT = 2;

describe('handleApiError decorator', () => {
  let client: HttpClient;

  beforeEach(() => {
    client = new HttpClient(
      { accessToken: "123", vkGroupId: "123", baseUrl: "https://localhost" },
      { retries: RETRIES_COUNT }
    );
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('should return the result when first request success', async () => {

    nock("https://localhost")
    .post("/test", () => true).query(true).reply(200, { success: true, data: "value" });

    const result = await client.request("test");

    expect(result).toEqual({ data: "value" });
  });

  it('should return the result when retrying success', async () => {

    nock("https://localhost")
    .post("/test", () => true).query(true).reply(500)
    .post("/test", () => true).query(true).reply(500)
    .post("/test", () => true).query(true).reply(200, { success: true, data: "value" });

    const result = await client.request("test");

    expect(result).toEqual({ data: "value" });
  });

  it('should return the result when retrying by 5xx, 429', async () => {

    nock("https://localhost")
    .post("/test", () => true).query(true).reply(500)
    .post("/test", () => true).query(true).reply(429)
    .post("/test", () => true).query(true).reply(200, { success: true, data: "value" });

    const result = await client.request("test");

    expect(result).toEqual({ data: "value" });
  });
});
