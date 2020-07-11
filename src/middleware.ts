export type MiddlewareRequest = {
  url: string;
  method: string;
  proto: string;
  protoMinor: number;
  protoMajor: number;
  body: Uint8Array;
  headers: Record<string, string | undefined>;
};

export type MiddlewareResponse = {
  status: number;
  headers: Record<string, string>;
  body: Uint8Array;
  trailers?: () => Promise<Headers> | Headers;
};
export type ProcessRequestMiddleware = (
  request: MiddlewareRequest,
) => void;

export type ProcessResponseMiddleware = (
  request: MiddlewareRequest,
  response: MiddlewareResponse,
) => Promise<MiddlewareResponse>;
