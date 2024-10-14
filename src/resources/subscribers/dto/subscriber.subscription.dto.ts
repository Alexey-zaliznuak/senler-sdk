/** https://help.senler.ru/senler/dev/api/methods/podpischiki/poluchenie-podpischikov#struktura-elementa-massiva-s-podpischikami-items */

import { IsDate, IsEnum, IsInt } from 'class-validator';
import { SubscriptionSourceType } from 'src/resources/share/types';

export class Subscription {
  /**
   * Date of the subscription format: d.m.Y H:i:s
   * Example: `27.11.2018 10:00:00`
   */
  @IsDate()
  date!: string;

  /** ID of the subscriber group */
  @IsInt()
  subscription_id!: number;

  @IsEnum(SubscriptionSourceType)
  source!: SubscriptionSourceType;
}
