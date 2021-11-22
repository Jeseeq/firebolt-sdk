export class NodeHttpClient {
  getRequestClient() {
    return {};
  }
  async request(
    method: string,
    path: string,
    options: Record<string, unknown>
  ) {
    console.log(path, options);
  }
}
