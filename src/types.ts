export interface HttpClientConfig {
  apiVersion?: string;
  baseURL?: string;
  accessToken: string;
  vkGroupId: string;
}

export interface ApiConfig extends HttpClientConfig {}
