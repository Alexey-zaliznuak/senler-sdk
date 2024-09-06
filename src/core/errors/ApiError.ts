export class ApiError extends Error {
  errorCode: number;

  constructor(errorCode: number) {
    const message = ApiError.getErrorMessage(errorCode);

    super(message);

    this.name = 'ApiError';
    this.errorCode = errorCode;
  }

  private static getErrorMessage(errorCode: number): string {
    switch (errorCode) {
      case 1:
        return 'Missing required parameter.';
      case 2:
        return 'Hash is missing.';
      case 4:
        return 'User did not allow sending messages.';
      case 5:
        return 'User not found.';
      case 9:
        return 'Too many requests (limit exceeded).';
      case 13:
        return 'Token not found.';
      case 14:
        return 'Invalid token.';
      default:
        return `Unknown error, code: ${errorCode}.`;
    }
  }
}
