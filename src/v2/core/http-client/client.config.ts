import axiosRetry, { IAxiosRetryConfigExtended } from 'axios-retry';
import { CacheConfig } from './cache';

export interface RetryConfig extends IAxiosRetryConfigExtended {
  delayFactor?: number;
}

export const BASE_RETRY_CONFIG: RetryConfig = {
  retries: 5,

  retryDelay(retryCount, error) {
    return axiosRetry.exponentialDelay(retryCount, error, 1000);
  },

  retryCondition: (error): boolean => {
    const networkError = axiosRetry.isNetworkOrIdempotentRequestError(error);

    const statusCode5xx = error.response && error.response.status >= 500 && error.response.status < 600;
    const statusCode429 = error.response && error.response.status === 429;

    const isENOTFOUND = error.code === 'ENOTFOUND';

    return statusCode5xx || statusCode429 || networkError || isENOTFOUND;
  },
};

export const BASE_CACHE_CONFIG: CacheConfig = {
  enabled: false,
};
