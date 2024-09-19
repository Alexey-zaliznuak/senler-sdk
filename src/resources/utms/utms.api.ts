import { HttpClient } from '../../core/HttpClient';
import { AddUtmRequestParams, AddUtmResponse } from './dto/add.dto';
import { DeleteUtmRequestParams, DeleteUtmResponse } from './dto/del.dto';
import { EditUtmRequestParams, EditUtmResponse } from './dto/edit.dto';
import { GetUtmRequestParams, GetUtmResponse } from './dto/get.dto';
import { GetLinkUtmRequestParams, GetLinkUtmResponse } from './dto/getLink.dto';
import { GetSubscriptionsCountStatisticsRequestParams, SubscriptionsCountStatisticsResponse } from './dto/statCount.dto';
import { GetSubscriptionsStatisticsRequestParams, SubscriptionsStatisticsResponse } from './dto/statSubscribe.dto';

export class UtmsResource {
  private httpClient: HttpClient;

  public readonly RESOURCE_NAME = 'utms';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Add Utm.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/dobavlenie-metki
   */
  async add(params: AddUtmRequestParams): Promise<AddUtmResponse> {
    return await this.httpClient.request<AddUtmResponse>(`${this.RESOURCE_NAME}/add`, params);
  }

  /**
   * Edit Utms.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/redaktirovat-metku
   */
  async edit(params: EditUtmRequestParams): Promise<EditUtmResponse> {
    return await this.httpClient.request<EditUtmResponse>(`${this.RESOURCE_NAME}/edit`, params);
  }

  /**
   * Delete Utm.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/udalenie-metki
   */
  async del(params: DeleteUtmRequestParams): Promise<DeleteUtmResponse> {
    return await this.httpClient.request<DeleteUtmResponse>(`${this.RESOURCE_NAME}/del`, params);
  }

  /**
   * Get all Utms.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/poluchenie-metok
   */
  async get(params?: GetUtmRequestParams): Promise<GetUtmResponse> {
    return await this.httpClient.request<GetUtmResponse>(`${this.RESOURCE_NAME}/get`, params);
  }

  /**
   * Getting a link to a subscription page with a utm.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/poluchenie-ssylki-dlya-metki
   */
  async getLink(params: GetLinkUtmRequestParams): Promise<GetLinkUtmResponse> {
    return await this.httpClient.request<GetLinkUtmResponse>(`${this.RESOURCE_NAME}/getLink`, params);
  }

  /**
   * Utm statistics.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/statistika-metok
   */
  async getSubscriptionsCountStatistics(params: GetSubscriptionsCountStatisticsRequestParams): Promise<SubscriptionsCountStatisticsResponse> {
    return await this.httpClient.request<SubscriptionsCountStatisticsResponse>(`${this.RESOURCE_NAME}/statCount`, params);
  }

  /**
   * Subscription statistics with tags.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/podpischiki-s-metkami
   */
  async getSubscriptionsStatistics(params: GetSubscriptionsStatisticsRequestParams): Promise<SubscriptionsStatisticsResponse> {
    return await this.httpClient.request<SubscriptionsStatisticsResponse>(`${this.RESOURCE_NAME}/statSubscribe`, params);
  }
}
