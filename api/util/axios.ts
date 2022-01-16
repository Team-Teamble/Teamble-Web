import axios, { AxiosInstance } from "axios";
import { APIContext } from "../context";
import { BadRequestError, NotFoundError, UnauthorizedError, UnknownAPIError } from "./error";

export interface Session {
  request: AxiosSession;
}

export type AxiosSession = AxiosInstance;

export function createAxiosSession(context: APIContext): Session {
  const request = axios.create({
    baseURL: "",
  });

  context.addListener((ctx) => {
    if (ctx.accessToken !== null) {
      request.defaults.headers.common["X-Authorization-Token"] = ctx.accessToken;
    } else {
      delete request.defaults.headers.common["X-Authorization-Token"];
    }
  });

  const proxyRequest = new Proxy(request, {
    get(obj, prop) {
      const target = obj[prop as keyof AxiosSession];

      if (requestCalls.includes(prop as string)) {
        const fn = target as (...args: unknown[]) => unknown;

        return (...args: unknown[]) => {
          const out = fn(...args);

          if (isPromise(out)) {
            return out.catch((e) => {
              if (axios.isAxiosError(e)) {
                const message = e.response?.data?.message ?? "";
                if (e.response?.status === 401) {
                  throw new UnauthorizedError(message);
                } else if (e.response?.status === 400) {
                  throw new BadRequestError(message);
                } else if (e.response?.status === 404) {
                  throw new NotFoundError(message);
                } else {
                  throw new UnknownAPIError(e.response?.status ?? -1);
                }
              }
              throw e;
            });
          } else {
            return out;
          }
        };
      }

      return target;
    },
  });

  return {
    request: proxyRequest,
  };
}

const requestCalls = ["get", "post", "put", "delete", "patch", "head", "option"];

function isPromise(obj: unknown): obj is Promise<unknown> {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }

  if ("then" in obj) {
    return true;
  }

  return false;
}
