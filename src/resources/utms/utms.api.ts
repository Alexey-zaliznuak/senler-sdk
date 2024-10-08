import { RequestCacheConfig } from 'src/configs';
import { HttpClient } from '../../core/http-client';
import { AddUtmRequest, AddUtmResponse } from './dto/add.dto';
import { DeleteUtmRequest, DeleteUtmResponse } from './dto/del.dto';
import { EditUtmRequest, EditUtmResponse } from './dto/edit.dto';
import { GetUtmRequest, GetUtmResponse } from './dto/get.dto';
import { GetLinkUtmRequest, GetLinkUtmResponse } from './dto/getLink.dto';
import { GetUtmSubscriptionsCountStatisticRequest, GetUtmSubscriptionsCountStatisticResponse } from './dto/statCount.dto';
import { GetUtmSubscriptionsStatisticsRequest, SubscriptionsStatisticsResponse } from './dto/statSubscribe.dto';

export class UtmsResource {
  private httpClient: HttpClient;

  public readonly RESOURCE_NAME = 'utms';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Add Utm.clear
   *
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/dobavlenie-metki
   */
  async add(data: AddUtmRequest, cacheConfig: RequestCacheConfig = { enabled: false }): Promise<AddUtmResponse> {
    return await this.httpClient.request<AddUtmResponse>(`${this.RESOURCE_NAME}/add`, data, cacheConfig);
  }

  /**
   * Edit Utms.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/redaktirovat-metku
   */
  async edit(data: EditUtmRequest, cacheConfig: RequestCacheConfig = { enabled: false }): Promise<EditUtmResponse> {
    return await this.httpClient.request<EditUtmResponse>(`${this.RESOURCE_NAME}/edit`, data, cacheConfig);
  }

  /**
   * Delete Utm.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/udalenie-metki
   */
  async del(data: DeleteUtmRequest, cacheConfig: RequestCacheConfig = { enabled: false }): Promise<DeleteUtmResponse> {
    return await this.httpClient.request<DeleteUtmResponse>(`${this.RESOURCE_NAME}/del`, data, cacheConfig);
  }

  /**
   * Get all Utms.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/poluchenie-metok
   */
  async get(data?: GetUtmRequest, cacheConfig?: RequestCacheConfig): Promise<GetUtmResponse> {
    return await this.httpClient.request<GetUtmResponse>(`${this.RESOURCE_NAME}/get`, data, cacheConfig);
  }

  /**
   * Getting a link to a subscription page with a utm.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/poluchenie-ssylki-dlya-metki
   */
  async getLink(data: GetLinkUtmRequest, cacheConfig?: RequestCacheConfig): Promise<GetLinkUtmResponse> {
    return await this.httpClient.request<GetLinkUtmResponse>(`${this.RESOURCE_NAME}/getLink`, data, cacheConfig);
  }

  /**
   * Utm statistics.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/statistika-metok
   */
  async getSubscriptionsCountStatistics(data: GetUtmSubscriptionsCountStatisticRequest, cacheConfig?: RequestCacheConfig): Promise<GetUtmSubscriptionsCountStatisticResponse> {
    return await this.httpClient.request<GetUtmSubscriptionsCountStatisticResponse>(`${this.RESOURCE_NAME}/statCount`, data, cacheConfig);
  }

  /**
   * Subscription statistics with tags.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/podpischiki-s-metkami
   */
  async getSubscriptionsStatistics(data: GetUtmSubscriptionsStatisticsRequest, cacheConfig?: RequestCacheConfig): Promise<SubscriptionsStatisticsResponse> {
    return await this.httpClient.request<SubscriptionsStatisticsResponse>(`${this.RESOURCE_NAME}/statSubscribe`, data, cacheConfig);
  }
}
