import { HttpClient } from './http-client';

export abstract class HttpResource {
  protected httpClient: HttpClient;

  abstract RESOURCE_NAME: string;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
}
