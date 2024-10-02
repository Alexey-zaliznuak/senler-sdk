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
   * Get a list of bots.
   *
   * https://help.senler.ru/senler/dev/api/methods/boty/poluchenie-spiska-botov
   */
  async get(data?: GetBotsListRequest): Promise<GetBotsListResponse> {
    return await this.httpClient.request<GetBotsListResponse>(`${this.RESOURCE_NAME}/get`, data);
  }

  /**
   * Get a list of steps in a bot.
   *
   * https://help.senler.ru/senler/dev/api/methods/boty/poluchenie-spiska-shagov-v-bote
   */
  async getSteps(data: GetStepsRequest): Promise<GetStepsResponse> {
    return await this.httpClient.request<GetStepsResponse>(`${this.RESOURCE_NAME}/getSteps`, data);
  }

  /**
   * Add a subscriber to the bot.
   *
   * https://help.senler.ru/senler/dev/api/methods/boty/dobavlenie-podpischika-v-bota
   */
  async addSubscriber(data: AddSubscriberRequest): Promise<AddSubscriberResponse> {
    return await this.httpClient.request<AddSubscriberResponse>(`${this.RESOURCE_NAME}/addSubscriber`, data);
  }

  /**
   * Remove subscriber from bot.
   *
   * https://help.senler.ru/senler/dev/api/methods/boty/udalit-podpischika-iz-bota
   */
  async delSubscriber(data: DelSubscriberRequest): Promise<DelSubscriberResponse> {
    return await this.httpClient.request<DelSubscriberResponse>(`${this.RESOURCE_NAME}/delSubscriber`, data);
  }
}
