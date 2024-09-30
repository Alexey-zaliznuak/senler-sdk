import { CacheManager } from "./cache.interface";


type CacheItem<T = any> = {value: T, expiration: number | null}

type MemoryCacheManagerConfig = {ttl?: number | null}

export class MemoryCacheManager<K = string, V = any> implements CacheManager<K, V, MemoryCacheManagerConfig> {
  private cache = new Map<any, CacheItem>;

  private cacheConfig: MemoryCacheManagerConfig

  constructor(
    cacheConfig: MemoryCacheManagerConfig,
  ) {
    this.cacheConfig = cacheConfig;
  }

  async get<T>(key: K): Promise<T | null> {
    const item = this.cache.get(key);

    if (!item) return null

    if (item.expiration && item.expiration < Date.now()) {
      await this.delete(key);
      return null;
    }

    return item.value as T;
  }

  async set<V>(key: K, value: V, cacheConfig: MemoryCacheManagerConfig): Promise<void> {
    cacheConfig = Object.assign(this.cacheConfig, cacheConfig);

    this.cache.set(key, {value, expiration: cacheConfig.ttl ? cacheConfig.ttl + Date.now() : null})
  }

  async delete(key: K): Promise<void> {
    this.cache.delete(key);
  }

  async clear(): Promise<void> {
    this.cache.clear();
  }

  async has(key: K): Promise<boolean> {
    return this.cache.has(key);
  }
}
