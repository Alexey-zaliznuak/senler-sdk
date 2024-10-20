import { handleApiError } from '../../../src/core/response/handle-api-error';
import { ApiError } from '../../../src/core/errors';
import { BaseResponse } from '../../../src/types';
import { buildMockSuccessResponse, mockFailedResponse, mockSuccessResponseData } from '../../utils';

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
