import { AppProps } from "next/app";
import { ReactElement } from "react";
import { GlobalStyle } from "../styles/globalStyle";
import { AppLayout } from "../components/organism/appLayout/AppLayout";
import { getLayout } from "../utils/layout";
import { installProgressBar } from "../utils/progress";
import Head from "next/head";
import { APIProvider } from "../utils/hook/api";
import { useRouter } from "next/router";
import { AuthUserProvider } from "../utils/hook/user";
import { QueryClient, QueryClientProvider } from "react-query";

installProgressBar();

const queryClieint = new QueryClient();

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const router = useRouter();

  const SelectedLayout = getLayout(Component) ?? AppLayout;
  return (
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
            <Component {...pageProps} />
          </SelectedLayout>
        </AuthUserProvider>
      </APIProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
