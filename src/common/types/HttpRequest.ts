export interface HttpConfig {
  params?: unknown;
  data?: unknown;
  headers?: unknown;
  maxContentLength?: number;
}

export interface HttpRequestSchema extends HttpConfig {
  method: string;
  baseURL: string;
  url: string;
}
