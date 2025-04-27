import Joi from 'joi';
import { RequiredInteger, RequiredString } from 'src/v2/core/validation';
import { OneOfEnumerate } from 'src/v2/core/validation/shortcuts/enum.validator';

export enum IntegrationType {
  gpt = 'gpt',
  liidex = 'liidex',
}

export interface UpdateIntegrationsSettingsRequest {
  vk_group_id: number;
  bot_id: number;
  step_id: string;
  description: string;
  title: string;
  value: string;
  settings: string;
  params: string;
  command: string;
  type: IntegrationType;
}

export const UpdateIntegrationStepSettingsRequestSchema = Joi.object({
  vk_group_id: RequiredInteger,
  bot_id: RequiredInteger,
  step_id: RequiredString,
  description: RequiredString,
  title: RequiredString,
  value: RequiredString,
  settings: RequiredString,
  params: RequiredString,
  command: RequiredString,
  type: OneOfEnumerate(IntegrationType),
}).required();
