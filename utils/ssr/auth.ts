import Cookies from "cookies";
import { GetServerSideProps } from "next";
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

export function withAuth<T>(fn: GetServerSideProps<T>, options?: WithAuthOptions): GetServerSideProps<T> {
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

    if (parsed.success) {
      setAccessToken(parsed.data.accessToken);

      metaProps = (): MetaProps => ({
        _IS_META: true,
        access: {
          accessToken: parsed.data.accessToken,
          user: {
            id: parsed.data.user.id,
            name: parsed.data.user.name,
          },
        },
      });
    }

    try {
      const result = await fn(context);

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
