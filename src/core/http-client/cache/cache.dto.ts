import { createCache } from "cache-manager";

export type CacheManager = ReturnType<typeof createCache>;

export type CacheConfig = {
  enabled: boolean;
  manager?: CacheManager;
}

export type RequestCacheConfig = CacheConfig & {
  ttl?: number;
}
