import axios from "axios";
import { useRouter } from "next/router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { apiService, setAccessToken } from "../../api";
import { authUserAtom, UserInfo } from "../../states/auth";

const localAPISession = axios.create({
  baseURL: "/api/",
});

function useAuthStore() {
  async function store(accessToken: string) {
    await localAPISession.post("auth/store", { accessToken });
  }

  return store;
}

function useAuthDestroy() {
  async function destroy() {
    await localAPISession.post("auth/destroy");
  }
  return destroy;
}

export function useLogin({ redirect }: { redirect?: string }) {
  const router = useRouter();
  const authStore = useAuthStore();
  const setUser = useSetRecoilState(authUserAtom);

  async function request(username: string, password: string) {
    const res = await apiService.auth.login({ username, password });
    authStore(res.accessToken);

    setAccessToken(res.accessToken);
    setUser({
      name: res.accessToken,
    });
    if (redirect) {
      router.push(redirect);
    }
  }

  return request;
}

export function useLogout({ redirect }: { redirect?: string }) {
  const router = useRouter();
  const destroy = useAuthDestroy();
  const setUser = useSetRecoilState(authUserAtom);

  async function request() {
    setUser(null);
    await destroy();
    if (redirect) {
      destroy();
      router.push(redirect);
    }
  }
  return request;
}

export function useUser(): UserInfo | null {
  const userInfo = useRecoilValue(authUserAtom);

  return userInfo;
}
