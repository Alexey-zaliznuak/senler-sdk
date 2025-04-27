import { RequestCacheConfig } from 'src/v2/configs';
import { HttpResource } from 'src/v2/core/abstract-http-resource';
import { ValidateData } from 'src/v2/core/validation';
import { AddSubscriberRequest, AddSubscriberRequestSchema, AddSubscriberResponse } from './dto/addSubscriber.dto';
import { DelSubscriberRequest, DelSubscriberRequestSchema, DelSubscriberResponse } from './dto/delSubscriber.dto';
import { GetBotsListRequest, GetBotsListRequestSchema, GetBotsListResponse } from './dto/get.dto';
import { GetStepsRequest, GetStepsRequestSchema, GetStepsResponse } from './dto/getSteps.dto';

export class BotsResource extends HttpResource {
  public readonly RESOURCE_NAME = 'bots';

  /**
   * Get a list of bots.
   *
   * https://help.senler.ru/senler/dev/api/methods/boty/poluchenie-spiska-botov
   */
  @ValidateData(GetBotsListRequestSchema, true)
  async get(data?: GetBotsListRequest, cacheConfig?: RequestCacheConfig): Promise<GetBotsListResponse> {
    return await this.httpClient.request<GetBotsListResponse>(`${this.RESOURCE_NAME}/get`, data, cacheConfig);
  }

  /**
   * Get a list of steps in a bot.
   *
   * https://help.senler.ru/senler/dev/api/methods/boty/poluchenie-spiska-shagov-v-bote
   */
  @ValidateData(GetStepsRequestSchema)
  async getSteps(data: GetStepsRequest, cacheConfig?: RequestCacheConfig): Promise<GetStepsResponse> {
    return await this.httpClient.request<GetStepsResponse>(`${this.RESOURCE_NAME}/getSteps`, data, cacheConfig);
  }

  /**
   * Add a subscriber to the bot.
   *
   * https://help.senler.ru/senler/dev/api/methods/boty/dobavlenie-podpischika-v-bota
   */
  @ValidateData(AddSubscriberRequestSchema)
  async addSubscriber(data: AddSubscriberRequest, cacheConfig: RequestCacheConfig = { enabled: false }): Promise<AddSubscriberResponse> {
    return await this.httpClient.request<AddSubscriberResponse>(`${this.RESOURCE_NAME}/addSubscriber`, data, cacheConfig);
  }

  /**
   * Remove subscriber from bot.
   *
   * https://help.senler.ru/senler/dev/api/methods/boty/udalit-podpischika-iz-bota
   */
  @ValidateData(DelSubscriberRequestSchema)
  async delSubscriber(data: DelSubscriberRequest, cacheConfig: RequestCacheConfig = { enabled: false }): Promise<DelSubscriberResponse> {
    return await this.httpClient.request<DelSubscriberResponse>(`${this.RESOURCE_NAME}/delSubscriber`, data, cacheConfig);
  }
}
