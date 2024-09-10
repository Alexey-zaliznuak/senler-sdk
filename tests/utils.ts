import dotenv from 'dotenv';
import { DEFAULT_API_VERSION } from '../src/constants';
import { BaseResponse } from '../src/types';


dotenv.config({ override: true });


export const mockSuccessResponseData = {
  items: { id: 1, name: 'John Doe' }
};

export function buildMockSuccessResponse<T extends object = typeof mockSuccessResponseData>(data: T = mockSuccessResponseData as T): BaseResponse<T> {
  return {
    success: true,
    ...data
  };
}

export const mockFailedResponse = {
  success: false,
  error_code: 0,
  error_message: 'Something went wrong'
};


/**
 * Build necessary query params for senler api: `apiVersion`, `accessToken`, `vkGroupId`.
 * Used defaults and env values if ones not provided.
 */
export function buildSenlerApiQueryParams(
  params?: {apiVersion?: string, accessToken?: string, vkGroupId?: string}
): string {
  return `access_token=${params?.accessToken || process.env.SENLER_TESTS_ACCESS_TOKEN}` +
  `&vk_group_id=${params?.vkGroupId || process.env.SENLER_TESTS_VK_GROUP_ID}` +
  `&v=${params?.apiVersion || DEFAULT_API_VERSION}`
}
