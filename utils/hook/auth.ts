import axios from "axios";
import { useRouter } from "next/router";
import { apiService, setAccessToken } from "../../api";
import { UserInfo } from "../../states/auth";
import { useAPIAuth } from "./api";

const ACCESS_TOKEN_STORAGE_KEY = "accessToken";
const USER_STORAGE_KEY = "user";

const localAPISession = axios.create({
  baseURL: "/api/",
});

function useAuthStore() {
  async function store(accessToken: string, user: UserInfo) {
    await localAPISession.post("auth/store", { accessToken, user });
    localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, accessToken);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
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

  const apiAuth = useAPIAuth();

  async function request(username: string, password: string) {
    const res = await apiService.auth.login({ email: username, password });

    apiAuth.setAccessToken(res.accesstoken);

    const user = {
      id: res.user.id,
      name: res.user.name,
      profilePic: res.user.photo,
      currentProjectId: res.user.projectId,
    };

    authStore(res.accesstoken, user);

    setAccessToken(res.accesstoken);
    if (redirect) {
      router.push(redirect);
    }
  }

  return request;
}

export function useLogout({ redirect }: { redirect?: string }) {
  const router = useRouter();
  const destroy = useAuthDestroy();

  const apiAuth = useAPIAuth();

  async function request() {
    apiAuth.clearAccessToken();
    await destroy();
    if (redirect) {
      destroy();
      router.push(redirect);
    }
  }
  return request;
}
