import { ERROR_CODES } from "../../constants";

export class ApiError extends Error {
  errorCode: number;

  constructor(errorCode: number | any) {
    const message = ApiError.getErrorMessage(errorCode);

    super(message);

    this.name = 'ApiError';
    this.errorCode = errorCode;
  }

  public static getErrorMessage(code: any): string {
    if (typeof code === 'number' && code in ERROR_CODES) {
      return ERROR_CODES[code];
    }
    return "Unknown error";
  }
}
