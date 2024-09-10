import { BaseResponse } from "../src/types";


export function buildSuccessResponse<T>(data: T): BaseResponse<T> {
  return {
    success: true,
    ...data
  };
}

export function getFailedResponse(): BaseResponse {
  return {
    success: false,
    error_code: 0,
    error_message: "Unknown error"
  };
}