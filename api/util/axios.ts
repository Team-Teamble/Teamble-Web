import axios, { AxiosInstance } from "axios";
import { APIContext } from "../context";

export type AxiosSession = AxiosInstance;

export function createAxiosSession(context: APIContext): AxiosSession {
  const session = axios.create({
    baseURL: "",
  });

  context.addListener((ctx) => {
    if (ctx.accessToken !== null) {
      session.defaults.headers.common["Authorization"] = ctx.accessToken;
    } else {
      delete session.defaults.headers.common["Authorization"];
    }
  });

  return session;
}
