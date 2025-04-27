import { StepType } from './getSteps.step.type.dto';

export interface Step {
  /**
   * Step id in bot
   *
   * Example: `5c35bb800b295034fa5062a6`
   */
  step_id: string;

  /** Step name */
  title: string;

  /**
   * Step type:
   *
   * `start` Start
   *
   * `timer` Timer
   *
   * `action` Action
   *
   * `if` Condition
   *
   * `message` Message
   *
   * ---
   *
   * Example: `if`
   */
  type: keyof typeof StepType;

  /**
   * Total number of step runs
   *
   * Example: `3562`
   */
  lead_inc: number;
}
