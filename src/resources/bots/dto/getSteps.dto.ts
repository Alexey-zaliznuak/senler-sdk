// https://help.senler.ru/senler/dev/api/methods/boty/poluchenie-spiska-shagov-v-bote

import { Step } from './getSteps.step.dto';

export interface GetStepsRequest {
  bot_id: string;
  count?: string;
  offset?: number;
  step_id?: string;
}
export interface GetStepsResponse {
  count: string;
  items: Array<Step>;
}
