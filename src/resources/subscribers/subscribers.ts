import { HttpClient } from '../../core/HttpClient';
import { GetSubscribersRequestParams } from './dto/get.dto';

export class SubscribersResource {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async getSubscribers(params: GetSubscribersRequestParams) {
    return this.httpClient.get('subscribers/get', params);
  }
}
