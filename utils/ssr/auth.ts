import Cookies from "cookies";
import { GetServerSideProps } from "next";
import { setAccessToken } from "../../api";
import { UnauthorizedError } from "../../api/util/error";
import { UserInfo } from "../../states/auth";

interface WithAuthOptions {
  strict: boolean;
}

export function withAuth<T>(fn: GetServerSideProps<T>, options?: WithAuthOptions): GetServerSideProps<T> {
  return async (context) => {
    const cookies = new Cookies(context.req, context.res);
    const token = cookies.get("accessToken") ?? null;

    if (options?.strict || token === null) {
      return loginRedirection;
    }

    setAccessToken(token);

    const userInfo: UserInfo = {
      name: token,
    };

    try {
      const result = await fn(context);

      if ("props" in result) {
        return { props: { ...result.props, accessToken: token, userInfo } };
      }

      return result;
    } catch (e) {
      if (e instanceof UnauthorizedError) {
        return loginRedirection;
      }
      throw e;
    }
  };
}

const loginRedirection = {
  redirect: {
    destination: "/login",
    permanent: false,
  },
};
