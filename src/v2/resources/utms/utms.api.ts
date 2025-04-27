import { RequestCacheConfig } from 'src/v2/configs';
import { HttpResource } from 'src/v2/core/abstract-http-resource';
import { ValidateData } from 'src/v2/core/validation';
import { AddUtmRequest, AddUtmRequestSchema, AddUtmResponse } from './dto/add.dto';
import { DeleteUtmRequest, DeleteUtmRequestSchema, DeleteUtmResponse } from './dto/del.dto';
import { EditUtmRequest, EditUtmRequestSchema, EditUtmResponse } from './dto/edit.dto';
import { GetUtmRequest, GetUtmRequestSchema, GetUtmResponse } from './dto/get.dto';
import { GetLinkUtmRequest, GetLinkUtmRequestSchema, GetLinkUtmResponse } from './dto/getLink.dto';
import { GetUtmSubscriptionsCountStatisticsRequest, GetUtmSubscriptionsCountStatisticsRequestSchema, GetUtmSubscriptionsCountStatisticsResponse } from './dto/statCount.dto';
import { GetUtmSubscriptionsStatisticsRequest, GetUtmSubscriptionsStatisticsRequestSchema, SubscriptionsStatisticsResponse } from './dto/statSubscribe.dto';

export class UtmsResource extends HttpResource {
  public readonly RESOURCE_NAME = 'utms';

  /**
   * Add Utm.clear
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/dobavlenie-metki
   */
  @ValidateData(AddUtmRequestSchema)
  async add(data: AddUtmRequest, cacheConfig: RequestCacheConfig = { enabled: false }): Promise<AddUtmResponse> {
    return await this.httpClient.request<AddUtmResponse>(`${this.RESOURCE_NAME}/add`, data, cacheConfig);
  }

  /**
   * Edit Utms.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/redaktirovat-metku
   */
  @ValidateData(EditUtmRequestSchema)
  async edit(data: EditUtmRequest, cacheConfig: RequestCacheConfig = { enabled: false }): Promise<EditUtmResponse> {
    return await this.httpClient.request<EditUtmResponse>(`${this.RESOURCE_NAME}/edit`, data, cacheConfig);
  }

  /**
   * Delete Utm.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/udalenie-metki
   */
  @ValidateData(DeleteUtmRequestSchema)
  async del(data: DeleteUtmRequest, cacheConfig: RequestCacheConfig = { enabled: false }): Promise<DeleteUtmResponse> {
    return await this.httpClient.request<DeleteUtmResponse>(`${this.RESOURCE_NAME}/del`, data, cacheConfig);
  }

  /**
   * Get all Utms.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/poluchenie-metok
   */
  @ValidateData(GetUtmRequestSchema, true)
  async get(data?: GetUtmRequest, cacheConfig?: RequestCacheConfig): Promise<GetUtmResponse> {
    return await this.httpClient.request<GetUtmResponse>(`${this.RESOURCE_NAME}/get`, data, cacheConfig);
  }

  /**
   * Getting a link to a subscription page with a utm.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/poluchenie-ssylki-dlya-metki
   */
  @ValidateData(GetLinkUtmRequestSchema)
  async getLink(data: GetLinkUtmRequest, cacheConfig?: RequestCacheConfig): Promise<GetLinkUtmResponse> {
    return await this.httpClient.request<GetLinkUtmResponse>(`${this.RESOURCE_NAME}/getLink`, data, cacheConfig);
  }

  /**
   * Utm statistics.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/statistika-metok
   */
  @ValidateData(GetUtmSubscriptionsCountStatisticsRequestSchema)
  async getSubscriptionsCountStatistics(data: GetUtmSubscriptionsCountStatisticsRequest, cacheConfig?: RequestCacheConfig): Promise<GetUtmSubscriptionsCountStatisticsResponse> {
    return await this.httpClient.request<GetUtmSubscriptionsCountStatisticsResponse>(`${this.RESOURCE_NAME}/statCount`, data, cacheConfig);
  }

  /**
   * Subscription statistics with tags.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/podpischiki-s-metkami
   */
  @ValidateData(GetUtmSubscriptionsStatisticsRequestSchema)
  async getSubscriptionsStatistics(data: GetUtmSubscriptionsStatisticsRequest, cacheConfig?: RequestCacheConfig): Promise<SubscriptionsStatisticsResponse> {
    return await this.httpClient.request<SubscriptionsStatisticsResponse>(`${this.RESOURCE_NAME}/statSubscribe`, data, cacheConfig);
  }
}
