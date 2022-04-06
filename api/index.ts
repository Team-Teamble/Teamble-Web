import { AuthAPI } from "./auth";
import { createAuthAPIReal } from "./auth/real";
import { apiContext } from "./context";
import { LandingAPI } from "./landing";
import { createLandingAPIReal } from "./landing/real";
import { MemberAPI } from "./member";
import { createMemberAPIReal } from "./member/real";
import { ProjectAPI } from "./project";
import { createProjectAPIReal } from "./project/real";
import { UserProfileAPI } from "./userProfile";
import { createUserProfileReal } from "./userProfile/real";
import { createAxiosSession, Session } from "./util/axios";
import { PokeAPI } from "./poke";
import { createPokeAPI } from "./poke/real";
import { AxiosInstance } from "axios";

export interface APIService {
  auth: AuthAPI;
  landing: LandingAPI;
  member: MemberAPI;
  project: ProjectAPI;
  userProfile: UserProfileAPI;
  poke: PokeAPI;
}

export function setAccessToken(token: string | null) {
  apiContext.accessToken = token;
}

export function createAPIService(config: { axios: AxiosInstance }): APIService {
  const axiosClient = {
    request: config.axios,
  };

  const auth = createAuthAPIReal(axiosClient);
  const poke = createPokeAPI(axiosClient);
  const landing = createLandingAPIReal(axiosClient);
  const member = createMemberAPIReal(axiosClient);
  const project = createProjectAPIReal(axiosClient);
  const userProfile = createUserProfileReal(axiosClient);

  return {
    auth,
    landing,
    member,
    project,
    userProfile,
    poke,
  };
}

export const apiService = createAPIService({
  axios: createAxiosSession(apiContext, process.env.NEXT_PUBLIC_API_ENDPOINT || ""),
});

export interface APIContext {
  service: APIService;
}

export function createAPIContext(config: { session: Session }): APIContext {
  return {
    service: createAPIService({ axios: config.session.request }),
  };
}
