import { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect } from "react";
import { MutableSnapshot, RecoilRoot } from "recoil";
import { apiService, setAccessToken } from "../api";
import { authUserAtom, UserInfo } from "../states/auth";
import { GlobalStyle } from "../styles/globalStyle";
import { AppLayout } from "../components/organism/appLayout/AppLayout";
import { MetaProps } from "../utils/ssr";
import { useSetUser } from "../utils/hook/auth";
import { UnauthorizedError } from "../api/util/error";
import { getLayout } from "../utils/layout";
import { installProgressBar } from "../utils/progress";
import Head from "next/head";
import { APIProvider } from "../api/hook";
import { useRouter } from "next/router";

interface MyAppProps {
  _META_PROPS?: MetaProps;
  [key: string]: unknown;
}

installProgressBar();

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const { _META_PROPS, ...otherPageProps } = pageProps as MyAppProps;

  const router = useRouter();

  useEffect(() => {
    if (_META_PROPS?._IS_META) {
      const { access } = _META_PROPS;
      if (access) {
        setAccessToken(access.accessToken);
      }
    }
  }, [_META_PROPS]);

  function initState({ set }: MutableSnapshot) {
    set(authUserAtom, _META_PROPS?.access?.user ?? null);
  }

  const SelectedLayout = getLayout(Component) ?? AppLayout;
  return (
    <RecoilRoot initializeState={initState}>
      <APIProvider
        endpoint={process.env.NEXT_PUBLIC_API_ENDPOINT ?? ""}
        onUnauthorizedError={() => router.replace("/login")}>
        <DetectAuth user={_META_PROPS?.access?.user ?? null} accessToken={_META_PROPS?.access?.accessToken ?? null}>
          <SelectedLayout>
            <Head>
              <title>teamble</title>
              <meta property="og:url" content="//teamble.vercel.app" />
              <meta property="og:title" content="teamble" />
              <meta property="og:type" content="website" />
              <meta property="og:image" content="//teamble.vercel.app/teambleThumbnail.png" />
              <meta property="og:description" content="서로 다른 색의 우리가 만나는 공간, 팀블" />
            </Head>
            <GlobalStyle />
            <Component {...otherPageProps} />
          </SelectedLayout>
        </DetectAuth>
      </APIProvider>
    </RecoilRoot>
  );
}

export default MyApp;

interface DetectAuthProps {
  user: UserInfo | null;
  accessToken: string | null;
  children: ReactNode;
}

function DetectAuth(props: DetectAuthProps) {
  const setUser = useSetUser();
  useEffect(() => {
    setUser(props.user);
  }, [props.user, setUser]);

  useEffect(() => {
    (async () => {
      setAccessToken(props.accessToken);
      try {
        const { user } = await apiService.auth.verify();
        setUser({
          id: user.id,
          name: user.name,
          profilePic: user.photo,
          currentProjectId: user.projectId,
          isAlarmAvailable: !user.isChecked,
        });
      } catch (e) {
        if (e instanceof UnauthorizedError) {
          setUser(null);
        } else {
          throw e;
        }
      }
    })();
  }, [props.user]);

  return <>{props.children}</>;
}
