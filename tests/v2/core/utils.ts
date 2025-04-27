import dotenv from 'dotenv';
import { BaseResponse } from '../../../src/v2/types';

dotenv.config();

export const mockSuccessResponseData = {
  items: { id: 1, name: 'John Doe' },
};

export function buildMockSuccessResponse<T extends object = typeof mockSuccessResponseData>(data: T = mockSuccessResponseData as T): BaseResponse<T> {
  return {
    success: true,
    ...data,
  };
}

export const mockFailedResponse = {
  success: false,
  error_code: 0,
  error_message: 'Something went wrong',
};
