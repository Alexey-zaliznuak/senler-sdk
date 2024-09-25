import { HttpClient } from '../../core/http-client';
import { AddSubscriberRequest, AddSubscriberResponse } from './dto/addSubscriber.dto';
import { DelSubscriberRequest, DelSubscriberResponse } from './dto/delSubscriber.dto';
import { GetBotsListRequest, GetBotsListResponse } from './dto/get.dto';
import { GetStepsRequest, GetStepsResponse } from './dto/getSteps.dto';

export class BotsResource {
  private httpClient: HttpClient;

  public readonly RESOURCE_NAME = 'bots';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   */
  async get(data?: GetBotsListRequest): Promise<GetBotsListResponse> {
    return await this.httpClient.request<GetBotsListResponse>(`${this.RESOURCE_NAME}/get`, data);
  }

  /**
   */
  async getSteps(data: GetStepsRequest): Promise<GetStepsResponse> {
    return await this.httpClient.request<GetStepsResponse>(`${this.RESOURCE_NAME}/getSteps`, data);
  }

  /**
   */
  async addSubscriber(data: AddSubscriberRequest): Promise<AddSubscriberResponse> {
    return await this.httpClient.request<AddSubscriberResponse>(`${this.RESOURCE_NAME}/addSubscriber`, data);
  }

  /**
   */
  async delSubscriber(data: DelSubscriberRequest): Promise<DelSubscriberResponse> {
    return await this.httpClient.request<DelSubscriberResponse>(`${this.RESOURCE_NAME}/delSubscriber`, data);
  }
}
