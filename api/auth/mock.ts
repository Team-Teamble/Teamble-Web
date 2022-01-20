import { AuthAPI, LoginInput, LoginOutput, RegisterInput, RegisterOutput, VerifyOutput } from ".";
import { apiContext } from "../context";
import { UnauthorizedError } from "../util/error";
import { withLogger } from "../util/logger";

export const AuthAPIMock = withLogger(
  class AuthAPIMock implements AuthAPI {
    async login(data: LoginInput): Promise<LoginOutput> {
      return {
        user: {
          id: 1,
          idFirebase: "ehxIllyXpcSXANkvEUYUqI2kCaZ2",
          name: "테스트",
          email: data.email,
          phone: "010-1234-5678",
          photo: "https.~~~",
          university: "팀블대학교",
          major: "컴퓨터공학과",
          area: "서울/경기",
          intro: "유저 한줄소개",
          description: "유저 내용",
          isChecked: false,
          createdAt: "2021-11-37T01:06:14.2472",
          updatedAt: "2021-11-37T01:06:14.2472",
          isDeleted: false,
          projectId: 1,
          type: {
            id: 3,
            name: "정열적인 빨강이",
          },
          tag: [
            {
              id: 1,
              name: "성실함",
            },
            {
              id: 3,
              name: "꼼꼼함",
            },
          ],
          position: [
            {
              id: 1,
              name: "기획자",
            },
          ],
          field: [
            {
              id: 1,
              name: "O2O",
            },
            {
              id: 3,
              name: "반려동물",
            },
          ],
        },
        accesstoken: `TEST_TOKEN_${data.email}_${data.password.length}`,
      };
    }

    async verify(): Promise<VerifyOutput> {
      if (apiContext.accessToken === null) {
        throw new UnauthorizedError("Mock Unauthorized");
      }

      return {
        user: {
          id: 1,
          idFirebase: "ehxIllyXpcSXANkvEUYUqI2kCaZ2",
          name: "테스트",
          email: "teamble@gmail.com",
          phone: "010-1234-5678",
          photo: "https.~~~",
          university: "팀블대학교",
          major: "컴퓨터공학과",
          area: "서울/경기",
          intro: "유저 한줄소개",
          description: "유저 내용",
          isChecked: false,
          createdAt: "2021-11-37T01:06:14.2472",
          updatedAt: "2021-11-37T01:06:14.2472",
          isDeleted: false,
          projectId: 1,
          type: {
            id: 3,
            name: "정열적인 빨강이",
          },
          tag: [
            {
              id: 1,
              name: "성실함",
            },
            {
              id: 3,
              name: "꼼꼼함",
            },
          ],
          position: [
            {
              id: 1,
              name: "기획자",
            },
          ],
          field: [
            {
              id: 1,
              name: "O2O",
            },
            {
              id: 3,
              name: "반려동물",
            },
          ],
        },
      };
    }

    async register(data: RegisterInput): Promise<RegisterOutput> {
      return {
        user: {
          id: 0,
          idFirebase: "ehxIllyXpcSXANkvEUYUqI2kCaZ2",
          name: data.name,
          email: data.email,
          photo: "https://~~~",
          isChecked: true,
          createdAt: "2021-11-37T01:06:14.2472",
          updatedAt: "2021-11-37T01:06:14.2472",
          isDeleted: false,
          projectId: null,
        },
        accesstoken: "ACCESS_TOKEN",
      };
    }
  },
);
