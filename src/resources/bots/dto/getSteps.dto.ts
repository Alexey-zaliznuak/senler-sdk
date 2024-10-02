// https://help.senler.ru/senler/dev/api/methods/boty/poluchenie-spiska-shagov-v-bote

import { Step } from './getSteps.step.dto';

export interface GetStepsRequest {
  /**
   * Example: `2314231`
   */
  bot_id: string | number;

  /**
   * Number of elements to return information about
   *
   * Maximum: 100
   */
  count?: string;

  /**
   * offset - how many elements to sample from
   *
   * Default: 0
   *
   * Maximum: 100,000
   *
   * Example: 50
   */
  offset?: number;

  /**
   * Step id in bot
   *
   * Example: `5c35bb800b295034fa5062a6`
   */
  step_id?: string;
}

export interface GetStepsResponse {
  count: number;
  items: Array<Step>;
}
