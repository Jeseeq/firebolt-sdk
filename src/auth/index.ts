import { ConnectionOptions } from "../connection";
import { Context } from "../context";

export class Authenticator {
  context: Context;
  options: ConnectionOptions;

  constructor(context: Context, options: ConnectionOptions) {
    this.context = context;
    this.options = options;
  }

  async authenticate() {
    const { httpClient } = this.context;
    const { api_url, username, password } = this.options;
    const path = `https://${api_url}/auth/v1/login'`;
    const body = {
      username,
      password
    };
    const response = httpClient.request("POST", path, { body });
    console.log(response);
  }

  getRequestHeaders(headers: Record<string, string>) {
    return headers;
  }
}
