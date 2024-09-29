import { CacheManager } from "./cache.interface";


export type CacheConfig = {
  enabled: boolean;
  manager?: CacheManager;
  ttl?: number | null;
}
