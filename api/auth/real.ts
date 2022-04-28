import { AuthAPI, LoginInput, LoginOutput, RegisterInput, RegisterOutput, VerifyOutput } from ".";
import { Session } from "../util/axios";

export function createAuthAPIReal(session: Session): AuthAPI {
  return {
    async login(data: LoginInput): Promise<LoginOutput> {
      const res = await session.request.post("auth/login", {
        email: data.email,
        password: data.password,
      });
      return res.data.data;
    },
    async verify(): Promise<VerifyOutput> {
      const res = await session.request.get("auth/login");
      return res.data.data;
    },
    async register(data: RegisterInput): Promise<RegisterOutput> {
      const res = await session.request.post("auth/signup", data);
      return res.data.data;
    },
  };
}
