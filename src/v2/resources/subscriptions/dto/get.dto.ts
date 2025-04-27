/** https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/poluchenie-spiska-grupp-podpischikov */

import Joi from 'joi';
import { Alternatives, OptionalInteger, OptionalPosInteger, OptionalString } from 'src/v2/core/validation';
import { Subscription } from './subscription.dto';

export interface GetSubscribersGroupsRequest {
  /**
   * Number of elements to return
   *
   * Max: `100`
   */
  count?: number;

  /**
   * From what number of elements you need to make a selection
   *
   * Default: `0`
   *
   * Max: `100.000`
   *
   * Example: `50`
   */
  offset?: string;

  /**
   * Subscriber group IDs, 0 for no group
   *
   * Example: `[1, 2]`
   */
  subscription_id?: Array<number | string>;
}

export const GetSubscribersGroupsRequestSchema = Joi.object({
  count: OptionalInteger,
  offset: OptionalString,
  subscription_id: Joi.array()
    .items(Alternatives([OptionalPosInteger, OptionalString]))
    .optional(),
});

export interface GetSubscribersGroupsResponse {
  count: number;
  items: Array<Subscription>;
}
