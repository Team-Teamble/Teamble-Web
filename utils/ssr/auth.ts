import Cookies from "cookies";
import { GetServerSideProps } from "next";
import { setAccessToken } from "../../api";
import { UnauthorizedError } from "../../api/util/error";

export function withAuth<T>(fn: GetServerSideProps<T>): GetServerSideProps<T> {
  return async (context) => {
    const cookies = new Cookies(context.req, context.res);
    const token = cookies.get("accessToken") ?? null;

    if (token === null) {
      return loginRedirection;
    }

    setAccessToken(token);

    try {
      const result = await fn(context);

      if ("props" in result) {
        return { props: { ...result.props, accessToken: token } };
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
