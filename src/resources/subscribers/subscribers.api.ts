import { HttpClient } from '../../core/HttpClient';
import { GetSubscribersRequestParams, GetSubscribersResponse } from './dto/get.dto';

export class SubscribersResource {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async getSubscribers(params: GetSubscribersRequestParams): Promise<GetSubscribersResponse> {
    return await this.httpClient.get<GetSubscribersResponse>('subscribers/get', params);
  }
}
