import { StepType } from './getSteps.step.type.dto';

export interface Step {
  step_id: string;
  title: string;
  type: keyof typeof StepType;
  lead_inc: number
}
