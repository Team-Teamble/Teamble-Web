import { AuthAPI } from "./auth";
import { AuthAPIMock } from "./auth/mock";
import { APIContext, createAPIContext } from "./context";
import { createAxiosSession } from "./util/axios";

export interface APIService {
  auth: AuthAPI;
}

const apiContext: APIContext = createAPIContext();

export function setAccessToken(token: string | null) {
  apiContext.accessToken = token;
}

export function createAPIService(): APIService {
  const axios = createAxiosSession(apiContext);

  const auth = new AuthAPIMock();

  return {
    auth,
    
  };
}

export const apiService = createAPIService();
