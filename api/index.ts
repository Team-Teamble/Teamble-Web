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
import { createAxiosSession } from "./util/axios";
import { PokeAPI } from "./poke";
import { createPokeAPI } from "./poke/real";

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

export function createAPIService(config: { endpoint: string }): APIService {
  const axios = createAxiosSession(apiContext, config.endpoint);

  const auth = createAuthAPIReal(axios);

  const poke = createPokeAPI(axios);

  const landing = createLandingAPIReal(axios);
  const member = createMemberAPIReal(axios);
  const project = createProjectAPIReal(axios);
  const userProfile = createUserProfileReal(axios);

  return {
    auth,
    landing,
    member,
    project,
    userProfile,
    poke,
  };
}

export const apiService = createAPIService({ endpoint: process.env.NEXT_PUBLIC_API_ENDPOINT || "" });
