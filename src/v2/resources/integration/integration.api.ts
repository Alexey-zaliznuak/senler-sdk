import { HttpResource } from 'src/v2/core/abstract-http-resource';
import { ValidateData } from 'src/v2/core/validation';
import { UpdateIntegrationsSettingsRequest, UpdateIntegrationStepSettingsRequestSchema } from './integration.dto';

export class IntegrationResource extends HttpResource {
  RESOURCE_NAME = '';

  @ValidateData(UpdateIntegrationStepSettingsRequestSchema, false)
  async updateStepSettings(data?: UpdateIntegrationsSettingsRequest): Promise<any> {
    return await this.httpClient.request(`${this.RESOURCE_NAME}/settingsStep`, data);
  }
}
