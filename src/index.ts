//node entry point
import { FireboltClient } from "./firebolt";
import { HttpClient } from "./http/node";
import { Logger } from "./logger/node";

export const Firebolt = FireboltClient({
  logger: Logger,
  httpClient: HttpClient
});
