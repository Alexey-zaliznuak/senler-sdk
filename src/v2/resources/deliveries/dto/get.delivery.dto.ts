import { DeliveryStatus } from './get.delivery.status.dto';
import { DeliveryType } from './get.delivery.type.dto';

export interface Delivery {
  delivery_id: string;

  /**
   * Delivery name
   *
   * Example: Test
   */
  name: string;

  /**
   * Delivery type:
   *
   * `chain` Auto message
   *
   * `subscription` Group mailing
   *
   * `once` Targeted mailing
   *
   * `single` One-time mailing
   *
   * Example: `once`
   */
  type: DeliveryType;

  /**
   * Deliveries status:
   *
   * `waiting` Waiting
   *
   * `progress` Processing
   *
   * `done` Completed
   *
   * Example: `waiting`
   */
  status: DeliveryStatus;

  date: string;

  /**
   * mailing status
   *
   * 0 Started
   *
   * 1 Stopped
   *
   * example: 0
   */
  inactive: '0' | '1';

  count_recipients: string;

  count_send: string;

  count_error: string;

  count_transits: string;

  count_read: string;

  count_unsubscribers: string;
}
