import { ApiError } from '../../../../src/v2/core/errors';
import { handleApiError } from '../../../../src/v2/core/response/handle-api-error';
import { BaseResponse } from '../../../../src/v2/types';
import { buildMockSuccessResponse, mockFailedResponse, mockSuccessResponseData } from '../utils';

class TestClass {
  @handleApiError
  async apiMethod(): Promise<BaseResponse<typeof mockSuccessResponseData>> {
    return buildMockSuccessResponse();
  }

  @handleApiError
  async apiMethodWithError(): Promise<typeof mockFailedResponse> {
    return mockFailedResponse;
  }
}

describe('handleApiError decorator', () => {
  let testClass: TestClass;

  beforeEach(() => {
    testClass = new TestClass();
  });

  it('should return the result when success is true', async () => {
    const result = await testClass.apiMethod();

    expect(result).toEqual(buildMockSuccessResponse());
  });

  it('should throw ApiError when success is false', async () => {
    await expect(testClass.apiMethodWithError()).rejects.toThrow(ApiError);
  });

  it('should throw ApiError with correct message', async () => {
    await expect(testClass.apiMethodWithError()).rejects.toThrow(new ApiError(mockFailedResponse.error_code, mockFailedResponse.error_message));
  });

  it('should throw ApiError with correct details', async () => {
    try {
      await testClass.apiMethodWithError();
    } catch (error) {
      expect(error).toHaveProperty('details', {
        errorCode: mockFailedResponse.error_code,
        errorMessage: mockFailedResponse.error_message,
      });
    }
  });
});
