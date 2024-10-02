import axiosRetry, { IAxiosRetryConfig as AxiosRetryConfig } from 'axios-retry';
import { CacheConfig } from './cache';

export const BASE_AXIOS_RETRY_CONFIG: AxiosRetryConfig = {
  retries: 3,

  retryDelay: axiosRetry.exponentialDelay,

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
