/** https://help.senler.ru/senler/dev/api/methods/podpischiki/poluchenie-podpischikov#struktura-elementa-massiva-s-podpischikami-items */

import { SubscriptionSourceType } from 'src/v2/resources/share/types';

export interface Subscription {
  /**
   * Date of the subscription format: d.m.Y H:i:s
   * Example: `27.11.2018 10:00:00`
   */
  date: string;

  /** ID of the subscriber group */
  subscription_id: number;

  source: SubscriptionSourceType;
}
