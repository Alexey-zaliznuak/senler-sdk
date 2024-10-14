import { ERROR_CODES } from '../../constants';

/**
 * Raised by HttpClient when api returns `success: false`.
 * [See](https://help.senler.ru/senler/dev/api/vozvrashaemye-oshibki).
 */
export class ApiError extends Error {
  public errorCode: number;
  public details: object | undefined;

  constructor(errorCode: number | any, errorMessage?: string) {
    const message = ApiError.buildErrorMessage(errorCode, errorMessage);

    super(message);

    this.name = 'ApiError';
    this.errorCode = errorCode;
    this.details = { errorCode, errorMessage };
  }

  public static buildErrorMessage(code: any, responseErrorMessage?: string): string {
    let message: string;

    if (typeof code === 'number' && code in ERROR_CODES) {
      message = ERROR_CODES[code];
    } else {
      message = 'Undefined error';
    }

    if (responseErrorMessage) {
      message = message + ', details: ' + responseErrorMessage;
    }

    return message;
  }
}
