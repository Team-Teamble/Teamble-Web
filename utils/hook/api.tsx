import axios from "axios";
import { useRouter } from "next/router";
import { createContext, ReactNode, useCallback, useContext, useEffect, useRef, useState } from "react";
import { APIService, createAPIService } from "../../api";
import { withErrorReplacer } from "../../api/util/axios";
import { UnauthorizedError } from "../../api/util/error";

const emptyFunc = () => {};
const ACCESS_TOKEN_STORAGE_KEY = "accessToken";

interface APIContextValue {
  api: Readonly<APIService>;
  isLoaded: boolean;
  isAuthed: boolean;
  setAccessToken(accessToken: string): void;
  clearAccessToken(): void;
}

const APIContext = createContext<APIContextValue>({
  api: createAPIService({ axios: axios.create() }),
  isLoaded: false,
  isAuthed: false,
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

  const [isLoaded, setIsLoaded] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);
  const [apiService, setApiService] = useState<APIService>(() =>
    createAPIService({
      axios: withErrorReplacer(
        axios.create({
          baseURL: endpoint,
        }),
      ),
    }),
  );

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

    setIsAuthed(true);
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
    setIsAuthed(false);
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
      setIsAuthed(true);
    }
  }

  useEffect(() => {
    loadAccessToken();
    setIsLoaded(true);
  }, []);

  const contextValue: APIContextValue = {
    api: apiService,
    isLoaded: isLoaded,
    isAuthed,
    setAccessToken,
    clearAccessToken,
  };

  return <APIContext.Provider value={contextValue}>{children}</APIContext.Provider>;
}

export function useAPIService() {
  const { api, isLoaded, isAuthed } = useContext(APIContext);

  return { apiService: api, isLoaded, isAuthed };
}

export function useAPIAuth() {
  const ctx = useContext(APIContext);

  return {
    setAccessToken: ctx.setAccessToken,
    clearAccessToken: ctx.clearAccessToken,
  };
}

export function useAPI<Req extends unknown[], Res>(fn: (api: APIService) => (...args: Req) => Promise<Res>) {
  const { apiService, isLoaded } = useAPIService();
  const router = useRouter();

  const ref = useRef<{ resolve: (res: Res) => void; reject: (e: unknown) => void; request: Req }[]>([]);

  async function request(...args: Req): Promise<Res> {
    return new Promise((resolve, reject) => {
      if (isLoaded) {
        f(...args)
          .then(resolve)
          .catch(reject);
      } else {
        ref.current.push({
          resolve,
          reject,
          request: args,
        });
      }
    });
  }

  const f = useCallback(
    async function f(...args: Req): Promise<Res> {
      const target = fn(apiService);
      try {
        const res = await target(...args);
        return res;
      } catch (err) {
        if (err instanceof UnauthorizedError) {
          router.push("/login");
        }
        throw err;
      }
    },
    [apiService, fn, router],
  );

  useEffect(() => {
    if (isLoaded) {
      ref.current.forEach((el) => {
        const { request, resolve, reject } = el;
        f(...request)
          .then(resolve)
          .catch(reject);
      });
      ref.current = [];
    }
  }, [isLoaded, f]);

  return {
    request,
    isReady: isLoaded,
  };
}

interface APIHookResult<Req extends unknown[], Res> {
  request(...args: Req): Promise<Res | null>;
  data: Res | null;
  loading: boolean;
}

/** @deprecated */
export function useAPILegacy<Req extends unknown[], Res>(
  fn: (api: APIService) => (...args: Req) => Promise<Res>,
): APIHookResult<Req, Res> {
  const { apiService } = useAPIService();
  const router = useRouter();

  const [data, setData] = useState<Res | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const apiRequest = fn(apiService);

  async function request(...args: Req): Promise<Res | null> {
    setLoading(true);
    try {
      const res = await apiRequest(...args);
      setData(res);
      return res;
    } catch (err) {
      if (err instanceof UnauthorizedError) {
        router.push("/login");
        return null;
      }
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return {
    request,
    data,
    loading,
  };
}
