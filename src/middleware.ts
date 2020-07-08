import { server } from "./deps.ts";

export type MiddlewareResponse = {
  status: number;
  headers: Record<string, string>;
  body: Uint8Array;
  trailers?: () => Promise<Headers> | Headers;
};
export type ProcessRequestMiddleware = (
  request: server.ServerRequest,
) => server.ServerRequest;
export type ProcessResponseMiddleware = (
  request: server.ServerRequest,
  response: MiddlewareResponse,
) => Promise<MiddlewareResponse>;
