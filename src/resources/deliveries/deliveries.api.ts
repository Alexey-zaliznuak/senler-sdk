import { RequestCacheConfig } from 'src/configs';
import { GetDeliveriesRequest, GetDeliveriesRequestSchema, GetDeliveriesResponse } from './dto/get.dto';
import { GetRecipientStatisticsRequest, GetRecipientStatisticsRequestSchema, RecipientStatisticsResponse } from './dto/stat.dto';
import { GetDeliveryCountStatisticsRequest, DeliveryCountStatisticsResponse, GetDeliveryCountStatisticsRequestSchema } from './dto/statCount.dto';
import { ValidateData } from 'src/core/validation';
import { HttpResource } from 'src/core/abstract-http-resource';

export class DeliveriesResource extends HttpResource {
  public readonly RESOURCE_NAME = 'deliveries';

  /**
   * Get all deliveries.
   *
   * https://help.senler.ru/senler/dev/api/methods/rassylki/poluchenie-spiska-rassylok
   */
  @ValidateData(GetDeliveriesRequestSchema, true)
  async get(data?: GetDeliveriesRequest, cacheConfig?: RequestCacheConfig): Promise<GetDeliveriesResponse> {
    return await this.httpClient.request<GetDeliveriesResponse>(`${this.RESOURCE_NAME}/get`, data, cacheConfig);
  }

  /**
   * Delivery statistic with user info.
   *
   * https://help.senler.ru/senler/dev/api/methods/rassylki/statistika-dostavki
   */
  @ValidateData(GetRecipientStatisticsRequestSchema)
  async getSubscriptionsStatistics(data: GetRecipientStatisticsRequest, cacheConfig?: RequestCacheConfig): Promise<RecipientStatisticsResponse> {
    return await this.httpClient.request<RecipientStatisticsResponse>(`${this.RESOURCE_NAME}/stat`, data, cacheConfig);
  }

  /**
   * Delivery count statistic.
   *
   * https://help.senler.ru/senler/dev/api/methods/rassylki/statcount
   */
  @ValidateData(GetDeliveryCountStatisticsRequestSchema)
  async getSubscriptionsCountStatistics(data: GetDeliveryCountStatisticsRequest, cacheConfig?: RequestCacheConfig): Promise<DeliveryCountStatisticsResponse> {
    return await this.httpClient.request<DeliveryCountStatisticsResponse>(`${this.RESOURCE_NAME}/statCount`, data, cacheConfig);
  }
}
