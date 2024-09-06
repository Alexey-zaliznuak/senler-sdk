import { HttpClient } from '../../core/HttpClient';

export class SubscribersResource {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async getSubscribers(params?: Record<string, any>) {
    return this.httpClient.get('subscribers.get', params);
  }
}
