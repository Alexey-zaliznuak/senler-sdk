export interface CacheManager {
  get(key: string): Promise<any | null>;

  set(key: string, value: any, ttl?: number): Promise<any>;

  del(key: string): Promise<any>;
}
