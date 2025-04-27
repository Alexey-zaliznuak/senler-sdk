export { CacheConfig, RequestCacheConfig } from './core/http-client/cache/cache.dto';
export { RetryConfig } from './core/http-client/client.config';
export { LoggingConfig } from './core/http-client/client.dto';

import pino from 'pino';

import { API_BASE_URL, DEFAULT_API_VERSION } from './constants';

export { BASE_CACHE_CONFIG, BASE_RETRY_CONFIG } from './core/http-client/client.config';

export const BASE_LOGGING_CONFIG = {
  level: 'error',
  base: { pid: false },
  timestamp: pino.stdTimeFunctions.isoTime,
};

export const BASE_API_CONFIG = {
  baseUrl: API_BASE_URL,
  apiVersion: DEFAULT_API_VERSION,
};
