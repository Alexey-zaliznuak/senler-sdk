export interface HttpClientConfig {
  apiVersion?: string;
  baseURL?: string;
  accessToken: string;
  vkGroupId: string;
}

export interface ApiConfig extends HttpClientConfig {}

export type QueryParams = Record<string, string | number | boolean | null>;
