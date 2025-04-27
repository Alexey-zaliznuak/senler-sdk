export const API_BASE_URL = 'https://senler.ru/api';
export const DEFAULT_API_VERSION = '2.0';

export const ERROR_CODES: Record<number, string> = {
  0: 'Unknown error',
  1: 'One of the required request parameters is missing',
  2: 'Hash is missing',
  3: 'Incorrect hash',
  4: 'User did not allow sending messages',
  5: 'The specified user was not found',
  6: 'The specified community ID was not found',
  7: 'The specified group ID was not found',
  8: 'The specified tag ID was not found',
  9: 'Too many requests per second (maximum 20)',
  10: 'The specified bot ID was not found',
  11: 'The variable must contain only Latin letters or numbers',
  12: 'Incorrect parameter value',
  13: 'The specified token was not found',
  14: 'Invalid token',
};
