import { HttpClient } from '../../core/http-client';
import { AddUtmRequest, AddUtmResponse } from './dto/add.dto';
import { DeleteUtmRequest, DeleteUtmResponse } from './dto/del.dto';
import { EditUtmRequest, EditUtmResponse } from './dto/edit.dto';
import { GetUtmRequest, GetUtmResponse } from './dto/get.dto';
import { GetLinkUtmRequest, GetLinkUtmResponse } from './dto/getLink.dto';
import { GetSubscriptionsCountStatisticsRequest, SubscriptionsCountStatisticsResponse } from './dto/statCount.dto';
import { GetSubscriptionsStatisticsRequest, SubscriptionsStatisticsResponse } from './dto/statSubscribe.dto';

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
  async add(data: AddUtmRequest): Promise<AddUtmResponse> {
    return await this.httpClient.request<AddUtmResponse>(`${this.RESOURCE_NAME}/add`, data);
  }

  /**
   * Edit Utms.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/redaktirovat-metku
   */
  async edit(data: EditUtmRequest): Promise<EditUtmResponse> {
    return await this.httpClient.request<EditUtmResponse>(`${this.RESOURCE_NAME}/edit`, data);
  }

  /**
   * Delete Utm.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/udalenie-metki
   */
  async del(data: DeleteUtmRequest): Promise<DeleteUtmResponse> {
    return await this.httpClient.request<DeleteUtmResponse>(`${this.RESOURCE_NAME}/del`, data);
  }

  /**
   * Get all Utms.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/poluchenie-metok
   */
  async get(data?: GetUtmRequest): Promise<GetUtmResponse> {
    return await this.httpClient.request<GetUtmResponse>(`${this.RESOURCE_NAME}/get`, data);
  }

  /**
   * Getting a link to a subscription page with a utm.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/poluchenie-ssylki-dlya-metki
   */
  async getLink(data: GetLinkUtmRequest): Promise<GetLinkUtmResponse> {
    return await this.httpClient.request<GetLinkUtmResponse>(`${this.RESOURCE_NAME}/getLink`, data);
  }

  /**
   * Utm statistics.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/statistika-metok
   */
  async getSubscriptionsCountStatistics(data: GetSubscriptionsCountStatisticsRequest): Promise<SubscriptionsCountStatisticsResponse> {
    return await this.httpClient.request<SubscriptionsCountStatisticsResponse>(`${this.RESOURCE_NAME}/statCount`, data);
  }

  /**
   * Subscription statistics with tags.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/podpischiki-s-metkami
   */
  async getSubscriptionsStatistics(data: GetSubscriptionsStatisticsRequest): Promise<SubscriptionsStatisticsResponse> {
    return await this.httpClient.request<SubscriptionsStatisticsResponse>(`${this.RESOURCE_NAME}/statSubscribe`, data);
  }
}
