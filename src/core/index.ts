import { Context } from "../context";
import { Connection } from "../connection";
import { Options } from "../options";

export class FireboltCore {
  options: Options;
  context: Context;

  constructor(context: Context, options: Options) {
    this.context = context;
    this.options = options;
  }

  async createConnection() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return new Connection(this.context);
  }
}
