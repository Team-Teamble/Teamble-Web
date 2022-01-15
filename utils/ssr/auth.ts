import Cookies from "cookies";
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { setAccessToken } from "../../api";
import { UnauthorizedError } from "../../api/util/error";
import { UserInfo } from "../../states/auth";
import { z } from "zod";

export interface MetaProps {
  _IS_META: true;
  access: {
    accessToken: string;
    user: UserInfo;
  } | null;
}

interface WithAuthOptions {
  strict: boolean;
}

interface AuthContext {
  user: UserInfo | null;
}

type GetServerSidePropsWithAuth<P extends { [key: string]: any } = { [key: string]: any }> = (
  context: GetServerSidePropsContext,
  user: AuthContext,
) => Promise<GetServerSidePropsResult<P>>;

export function withAuth<T>(fn: GetServerSidePropsWithAuth<T>, options?: WithAuthOptions): GetServerSideProps<T> {
  return async (context) => {
    const cookies = new Cookies(context.req, context.res);
    const access = cookies.get("access") ?? "{}";

    const parsed = z
      .object({
        accessToken: z.string(),
        user: z.object({
          id: z.number(),
          name: z.string(),
        }),
      })
      .safeParse(JSON.parse(decodeURIComponent(access)));

    if (options?.strict && !parsed.success) {
      return loginRedirection;
    }

    let metaProps = (): MetaProps => ({
      _IS_META: true,
      access: null,
    });

    let user: UserInfo | null = null;

    if (parsed.success) {
      setAccessToken(parsed.data.accessToken);

      user = parsed.data.user;

      metaProps = (): MetaProps => ({
        _IS_META: true,
        access: {
          accessToken: parsed.data.accessToken,
          user: parsed.data.user,
        },
      });
    }

    try {
      const result = await fn(context, { user });

      if ("props" in result) {
        return { props: { ...result.props, _META_PROPS: metaProps() } };
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
