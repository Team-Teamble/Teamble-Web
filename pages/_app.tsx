import { AppProps } from "next/app";
import { ReactElement, useEffect } from "react";
import { MutableSnapshot, RecoilRoot } from "recoil";
import { setAccessToken } from "../api";
import { authUserAtom } from "../states/auth";
import { GlobalStyle } from "../styles/globalStyle";
import { AppLayout } from "../components/organism/appLayout/AppLayout";
import { MetaProps } from "../utils/ssr";
import { getLayout } from "../utils/layout";
import { installProgressBar } from "../utils/progress";
import Head from "next/head";
import { APIProvider } from "../utils/hook/api";
import { useRouter } from "next/router";
import { AuthUserProvider } from "../utils/hook/user";
import { QueryClient, QueryClientProvider } from "react-query";

interface MyAppProps {
  _META_PROPS?: MetaProps;
  [key: string]: unknown;
}

installProgressBar();

const queryClieint = new QueryClient();

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
      <QueryClientProvider client={queryClieint}>
        <APIProvider
          endpoint={process.env.NEXT_PUBLIC_API_ENDPOINT ?? ""}
          onUnauthorizedError={() => router.replace("/login")}>
          <AuthUserProvider>
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
          </AuthUserProvider>
        </APIProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
