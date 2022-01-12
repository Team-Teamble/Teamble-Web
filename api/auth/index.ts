export interface AuthAPI {
  login(data: LoginInput): Promise<LoginOutput>;
  verify(): Promise<VerifyOutput>;
}

export interface LoginInput {
  username: string;
  password: string;
}

export interface LoginOutput {
  accessToken: string;
}

export interface VerifyOutput {
  user: {
    username: string;
  };
}
