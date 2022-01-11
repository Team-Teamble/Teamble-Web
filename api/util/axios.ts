import axios, { AxiosInstance } from "axios";
import { APIContext } from "../context";
import { UnauthorizedError } from "./error";

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
      request.defaults.headers.common["Authorization"] = ctx.accessToken;
    } else {
      delete request.defaults.headers.common["Authorization"];
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
            return hookPromise(out, {
              error: (e, reject) => {
                if (axios.isAxiosError(e)) {
                  if (e.response?.status === 401) {
                    reject(new UnauthorizedError());
                    return;
                  }
                }
                reject(e);
              },
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

function hookPromise(
  promise: Promise<unknown>,
  { error }: { error: (err: unknown, reject: (err: unknown) => void) => void },
) {
  return new Promise((resolve, reject) => {
    promise.then(resolve).catch((e) => {
      error(e, reject);
    });
  });
}
