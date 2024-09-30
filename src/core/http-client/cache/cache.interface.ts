export interface CacheManager<K = string, V = any, C = any> {
  cacheConfig: C;

  get<T = V>(key: K): Promise<T | null>;

  set<T = V>(key: K, value: T, cacheConfig: C): Promise<void>;

  delete(key: K): Promise<void>;

  clear?(): Promise<void>;

  has?(key: K): Promise<boolean>;
}
