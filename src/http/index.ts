export type HttpClientOptions = Record<string, unknown>;

export interface HttpClientInterface {
  request(
    method: string,
    path: string,
    options: Record<string, unknown>
  ): Promise<void>;
  getRequestClient(): any;
}

export type HttpClient = {
  new (httpClientOptions?: HttpClientOptions): HttpClientInterface;
};
