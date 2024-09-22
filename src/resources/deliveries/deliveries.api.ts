import { HttpClient } from '../../core/HttpClient'
import { GetDeliveriesRequest, GetDeliveriesResponse } from './dto/get.dto'
import { GetRecipientStatisticsRequest, RecipientStatisticsResponse } from './dto/stat.dto'
import { GetDeliveryCountStatisticsRequest, DeliveryCountStatisticsResponse } from './dto/statCount.dto'

export class DeliveriesResource {
  private httpClient: HttpClient;

  public readonly RESOURCE_NAME = 'deliveries';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Add Utm.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/dobavlenie-metki
   */
  async get(data?: GetDeliveriesRequest): Promise<GetDeliveriesResponse> {
    return await this.httpClient.request<GetDeliveriesResponse>(`${this.RESOURCE_NAME}/get`, data);
  }

  /**
   * Subscription statistics with tags.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/podpischiki-s-metkami
   */
  async getSubscriptionsStatistics(data: GetRecipientStatisticsRequest): Promise<RecipientStatisticsResponse> {
    return await this.httpClient.request<RecipientStatisticsResponse>(`${this.RESOURCE_NAME}/stat`, data);
  }

  /**
   * Utm statistics.
   *
   * https://help.senler.ru/senler/dev/api/methods/metki/statistika-metok
   */
  async getSubscriptionsCountStatistics(data: GetDeliveryCountStatisticsRequest): Promise<DeliveryCountStatisticsResponse> {
    return await this.httpClient.request<DeliveryCountStatisticsResponse>(`${this.RESOURCE_NAME}/statCount`, data);
  }

}
