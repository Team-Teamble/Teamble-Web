import { useRouter } from "next/router";
import { useAPI, useAPIAuth } from "./api";

export function useLogin({ redirect }: { redirect?: string }) {
  const router = useRouter();

  const apiAuth = useAPIAuth();
  const login = useAPI((api) => api.auth.login);

  async function request(username: string, password: string) {
    const res = await login.request({ email: username, password });

    apiAuth.setAccessToken(res.accesstoken);

    if (redirect) {
      router.push(redirect);
    }
  }

  return request;
}

export function useLogout({ redirect }: { redirect?: string }) {
  const router = useRouter();

  const apiAuth = useAPIAuth();

  async function request() {
    apiAuth.clearAccessToken();
    if (redirect) {
      router.push(redirect);
    }
  }
  return request;
}
