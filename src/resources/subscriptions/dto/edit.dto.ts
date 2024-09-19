/** https://help.senler.ru/senler/dev/api/methods/gruppy-podpischikov/redaktirovanie-gruppy-podpischikov */

import { BaseEditableSubscribersGroup } from "./subscription.base-editable";

export interface EditSubscribersGroupRequest extends BaseEditableSubscribersGroup {
  subscription_id: number | string;

  /** Name of subscribers group */
  name: string;
}

export interface EditSubscribersGroupResponse {}
