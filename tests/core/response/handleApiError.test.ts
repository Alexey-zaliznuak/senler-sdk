import { handleApiError } from '../../../src/core/response/handle-api-error';
import { ApiError } from '../../../src/core/errors/api-error';
import { mockErrorResponse, mockSuccessResponse } from '../../mockResponses';


class TestClass {
  @handleApiError
  async apiMethod() {
    return mockSuccessResponse;
  }

  @handleApiError
  async apiMethodWithError() {
    return mockErrorResponse;
  }
}


describe('handleApiError decorator', () => {
  let testClass: TestClass;

  beforeEach(() => {
    testClass = new TestClass();
  });

  it('should return the result when success is true', async () => {
    const result = await testClass.apiMethod();
    expect(result).toEqual(mockSuccessResponse);
  });

  it('should throw ApiError when success is false', async () => {
    await expect(testClass.apiMethodWithError()).rejects.toThrow(ApiError);
  });

  it('should throw ApiError with correct error_code', async () => {
    await expect(testClass.apiMethodWithError()).rejects.toThrow(new ApiError(1));
  });
});
