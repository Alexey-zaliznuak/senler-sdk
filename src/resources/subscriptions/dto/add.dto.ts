/** https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/dobavlenie-gruppy-podpischikov */

import { BaseEditableSubscribersGroup } from './subscription.base-editable';

export interface AddSubscribersGroupRequest extends BaseEditableSubscribersGroup {
  /** Name of group of subscriptions */
  name: string;
}

export interface AddSubscribersGroupResponse {
  subscription_id: string;
}
