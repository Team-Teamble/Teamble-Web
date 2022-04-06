import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { APIService, createAPIService } from ".";
import { withErrorReplacer } from "./util/axios";

const emptyFunc = () => {};
const ACCESS_TOKEN_STORAGE_KEY = "accessToken";

interface APIContextValue {
  api: APIService;
  setAccessToken(accessToken: string): void;
  clearAccessToken(): void;
}

const APIContext = createContext<APIContextValue>({
  api: createAPIService({ axios: axios.create() }),
  clearAccessToken: emptyFunc,
  setAccessToken: emptyFunc,
});

interface APIProviderProps {
  endpoint: string;
  children: ReactNode;
  onUnauthorizedError(): void;
}

export function APIProvider(props: APIProviderProps) {
  const { children, endpoint } = props;

  const [apiService, setApiService] = useState(() => createAPIService({ axios: axios.create() }));

  function setAccessToken(accessToken: string) {
    localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, accessToken);
    setApiService(() =>
      createAPIService({
        axios: withErrorReplacer(
          axios.create({
            baseURL: endpoint,
            headers: {
              "X-Authorization-Token": accessToken,
            },
          }),
        ),
      }),
    );
  }

  function clearAccessToken() {
    localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
    setApiService(() =>
      createAPIService({
        axios: withErrorReplacer(
          axios.create({
            baseURL: endpoint,
          }),
        ),
      }),
    );
  }

  function loadAccessToken() {
    const token = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
    if (token && typeof token === "string") {
      setApiService(() =>
        createAPIService({
          axios: withErrorReplacer(
            axios.create({
              baseURL: endpoint,
              headers: {
                "X-Authorization-Token": token,
              },
            }),
          ),
        }),
      );
    }
  }

  useEffect(() => {
    loadAccessToken();
  }, []);

  const contextValue: APIContextValue = {
    api: apiService,
    setAccessToken,
    clearAccessToken,
  };

  return <APIContext.Provider value={contextValue}>{children}</APIContext.Provider>;
}

export function useAPIService(): Readonly<APIService> {
  const { api } = useContext(APIContext);

  return api;
}

export function useAPIAuth() {
  const ctx = useContext(APIContext);

  return {
    setAccessToken: ctx.setAccessToken,
    clearAccessToken: ctx.clearAccessToken,
  };
}
