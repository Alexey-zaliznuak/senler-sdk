import { ERROR_CODES } from '../../constants';

export class ApiError extends Error {
  errorCode: number;

  constructor(errorCode: number | any, errorMessage?: string) {
    const message = ApiError.getErrorMessage(errorCode, errorMessage);

    super(message);

    this.name = 'ApiError';
    this.errorCode = errorCode;
  }

  public static getErrorMessage(code: any, responseErrorMessage?: string): string {
    let message: string;

    if (typeof code === 'number' && code in ERROR_CODES) {
      message = ERROR_CODES[code]
    } else {
      message = `Undefined error`
    };

    if (responseErrorMessage) {
      message = message + ", details: " + responseErrorMessage
    }

    return message
  }
}
