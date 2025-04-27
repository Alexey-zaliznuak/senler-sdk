import { clearResponse } from '../../../../src/v2/core/response/clear-response';
import { buildMockSuccessResponse, mockFailedResponse, mockSuccessResponseData } from '../utils';

class TestClass {
  @clearResponse
  async apiMethodWithErrorDetails(): Promise<typeof mockFailedResponse & typeof mockSuccessResponseData> {
    return { ...mockFailedResponse, ...mockSuccessResponseData };
  }

  @clearResponse
  async apiMethodWithOutErrorDetails(): Promise<typeof mockSuccessResponseData> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { success, ...data } = buildMockSuccessResponse();

    return data;
  }
}

describe('Clear api response decorator', () => {
  let testClass: TestClass;

  beforeEach(() => {
    testClass = new TestClass();
  });

  it('Should return the result without error details in success response without error details', async () => {
    const result = await testClass.apiMethodWithErrorDetails();
    expect(result).toEqual(mockSuccessResponseData);
  });

  it('Should return the result in response without error details', async () => {
    const result = await testClass.apiMethodWithOutErrorDetails();
    expect(result).toEqual(mockSuccessResponseData);
  });
});
