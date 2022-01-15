import { AuthAPI } from "./auth";
import { AuthAPIMock } from "./auth/mock";
import { APIContext, createAPIContext } from "./context";
import { LandingAPI } from "./landing";
import { LandingAPIMock } from "./landing/mock";
import { MemberAPI } from "./member";
import { MemberAPIMock } from "./member/mock";
import { ProjectAPI } from "./project";
import { ProjectAPIMock } from "./project/mock";
import { UserProfileAPI } from "./userProfile";
import { UserProfileMock } from "./userProfile/mock";
import { createAxiosSession } from "./util/axios";

export interface APIService {
  auth: AuthAPI;
  landing: LandingAPI;
  member: MemberAPI;
  project: ProjectAPI;
  userProfile: UserProfileAPI;
}

const apiContext: APIContext = createAPIContext();

export function setAccessToken(token: string | null) {
  apiContext.accessToken = token;
}

export function createAPIService(): APIService {
  const axios = createAxiosSession(apiContext);

  const auth = new AuthAPIMock();
  const landing = new LandingAPIMock();
  const member = new MemberAPIMock();
  const project = new ProjectAPIMock();
  const userProfile = new UserProfileMock();

  return {
    auth,
    landing,
    member,
    project,
    userProfile,
  };
}

export const apiService = createAPIService();
