import { AuthAPI, LoginInput, LoginOutput, VerifyOutput } from ".";

export class AuthAPIMock implements AuthAPI {
  async login(data: LoginInput): Promise<LoginOutput> {
    return {
      accessToken: `TEST_TOKEN_${data.username}_${data.password.length}`,
    };
  }

  async verify(): Promise<VerifyOutput> {
    return {
      user: {
        username: "",
      },
    };
  }
}
