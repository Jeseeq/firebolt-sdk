import { ConnectionOptions } from "./connection";
import { LoggerInterface, LoggerOptions } from "./logger";
import { HttpClientInterface, HttpClientOptions } from "./http";

export type Options = {
  loggerOptions?: LoggerOptions;
  clientOptions?: HttpClientOptions;
  connectionOptions: ConnectionOptions;
  depencencies?: {
    logger: LoggerInterface;
    httpClient: HttpClientInterface;
  };
};
