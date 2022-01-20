import { AuthAPI } from "./auth";
import { createAuthAPIReal } from "./auth/real";
import { apiContext } from "./context";
import { LandingAPI } from "./landing";
import { createLandingAPIReal } from "./landing/real";
import { MemberAPI } from "./member";
import { MemberAPIMock } from "./member/mock";
import { ProjectAPI } from "./project";
import { createProjectAPIReal } from "./project/real";
import { UserProfileAPI } from "./userProfile";
import { createUserProfileReal } from "./userProfile/real";
import { createAxiosSession } from "./util/axios";

export interface APIService {
  auth: AuthAPI;
  landing: LandingAPI;
  member: MemberAPI;
  project: ProjectAPI;
  userProfile: UserProfileAPI;
}

export function setAccessToken(token: string | null) {
  apiContext.accessToken = token;
}

export function createAPIService(config: { endpoint: string }): APIService {
  const axios = createAxiosSession(apiContext, config.endpoint);

  const auth = createAuthAPIReal(axios);
  const landing = createLandingAPIReal(axios);
  const member = new MemberAPIMock();
  const project = createProjectAPIReal(axios);
  const userProfile = createUserProfileReal(axios);

  return {
    auth,
    landing,
    member,
    project,
    userProfile,
  };
}

export const apiService = createAPIService({ endpoint: process.env.NEXT_PUBLIC_API_ENDPOINT || "" });
