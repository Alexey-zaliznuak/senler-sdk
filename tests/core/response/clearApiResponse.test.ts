import { clearResponse } from "../../../src/core/response/clearResponse";
import { mockSuccessResponseData, mockSuccessResponse } from "../../mockResponses";


class TestClass {
  @clearResponse
  async apiMethodWithErrorDetails() {
    return mockSuccessResponse
  }

  @clearResponse
  async apiMethodWithOutErrorDetails() {
    return mockSuccessResponseData
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
