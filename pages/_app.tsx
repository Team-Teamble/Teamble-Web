import { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect } from "react";
import { MutableSnapshot, RecoilRoot } from "recoil";
import { setAccessToken } from "../api";
import { authUserAtom, UserInfo } from "../states/auth";
import { GlobalStyle } from "../styles/globalStyle";
import { AppLayout } from "../components/organism/appLayout/AppLayout";
import { MetaProps } from "../utils/ssr";
import { useSetUser } from "../utils/hook/auth";

interface MyAppProps {
  _META_PROPS?: MetaProps;
  [key: string]: unknown;
}

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const { _META_PROPS, ...otherPageProps } = pageProps as MyAppProps;

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

  return (
    <RecoilRoot initializeState={initState}>
      <DetectAuth user={_META_PROPS?.access?.user ?? null}>
        <AppLayout>
          <GlobalStyle />
          <Component {...otherPageProps} />
        </AppLayout>
      </DetectAuth>
    </RecoilRoot>
  );
}

export default MyApp;

interface DetectAuthProps {
  user: UserInfo | null;
  children: ReactNode;
}

function DetectAuth(props: DetectAuthProps) {
  const setUser = useSetUser();
  useEffect(() => {
    setUser(props.user);
  }, [props.user, setUser]);

  return <>{props.children}</>;
}
