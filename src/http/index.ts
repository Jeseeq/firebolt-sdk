export type HttpClientOptions = Record<string, unknown>;

export interface HttpClientInterface {
  callApi(method: string): void;
}

export type HttpClient = {
  new (httpClientOptions?: HttpClientOptions): HttpClientInterface;
};
