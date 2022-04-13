import axios, { AxiosInstance } from "axios";
import { BadRequestError, NotFoundError, UnauthorizedError, UnknownAPIError } from "./error";

export interface Session {
  request: AxiosSession;
}

export type AxiosSession = AxiosInstance;

export function withErrorReplacer(axiosCli: AxiosInstance) {
  axiosCli.interceptors.response.use(
    (config) => config,
    (e) => {
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message ?? "";
        if (e.response?.status === 401) {
          throw new UnauthorizedError(message);
        } else if (e.response?.status === 400) {
          throw new BadRequestError(message);
        } else if (e.response?.status === 404) {
          throw new NotFoundError(message);
        } else {
          console.error(e);
          throw new UnknownAPIError(e.response?.status ?? -1);
        }
      }
      throw e;
    },
  );
  return axiosCli;
}
