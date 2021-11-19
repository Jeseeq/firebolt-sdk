import { Context } from "../context";
import { Parameter } from "../paramter";

export type ConnectionOptions = {
  api_url: string;
  username: string;
  password: string;
  database: string;
  engine: string;
};

export class Connection {
  context: Context;
  constructor(context: Context) {
    this.context = context;
  }
  async execute(query: string, parameters?: Parameter[]) {
    //https://${FIREBOLT_ENGINE}.firebolt.us-east-1.dev.firebolt.io/?database=${FIREBOLT_DATABASE}&output_format=FB_JSONCompactLimited
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [{}, {}];
  }
}
