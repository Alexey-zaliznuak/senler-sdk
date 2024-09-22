import { DeliveryStatus } from './get.delivery.status.dto';
import { DeliveryType } from './get.delivery.type.dto';

export interface Delivery {
  delivery_id: number;
  name: string;
  type: DeliveryType;
  status: DeliveryStatus;
  date: string;
  inactive: 0 | 1;
  count_recipients: number;
  count_send: number;
  count_error: number;
  count_transits: number;
  count_read: number;
  count_unsubscribers: number;
}
