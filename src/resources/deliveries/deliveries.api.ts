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
   * Get all deliveries.
   *
   * https://help.senler.ru/senler/dev/api/methods/rassylki/poluchenie-spiska-rassylok
   */
  async get(data?: GetDeliveriesRequest): Promise<GetDeliveriesResponse> {
    return await this.httpClient.request<GetDeliveriesResponse>(`${this.RESOURCE_NAME}/get`, data);
  }

  /**
   * Delivery statistic with user info.
   *
   * https://help.senler.ru/senler/dev/api/methods/rassylki/statistika-dostavki
   */
  async getSubscriptionsStatistics(data: GetRecipientStatisticsRequest): Promise<RecipientStatisticsResponse> {
    return await this.httpClient.request<RecipientStatisticsResponse>(`${this.RESOURCE_NAME}/stat`, data);
  }

  /**
   * Delivery count statistic.
   *
   * https://help.senler.ru/senler/dev/api/methods/rassylki/statcount
   */
  async getSubscriptionsCountStatistics(data: GetDeliveryCountStatisticsRequest): Promise<DeliveryCountStatisticsResponse> {
    return await this.httpClient.request<DeliveryCountStatisticsResponse>(`${this.RESOURCE_NAME}/statCount`, data);
  }
}
