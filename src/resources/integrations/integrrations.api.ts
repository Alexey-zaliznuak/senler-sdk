import { ValidateData } from 'src/core/validation';
import { UpdateIntegrationsSettingsRequest, UpdateIntegrationStepSettingsRequestSchema } from './integrations.dto';
import { HttpResource } from 'src/core/abstract-http-resource';

export class IntegrationsResource extends HttpResource {
  RESOURCE_NAME = '';

  @ValidateData(UpdateIntegrationStepSettingsRequestSchema, false)
  async updateStepSettings(data?: UpdateIntegrationsSettingsRequest): Promise<any> {
    return await this.httpClient.request(`${this.RESOURCE_NAME}/settingsStep`, data);
  }
}
