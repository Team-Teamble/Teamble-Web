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
      <DetectAuth user={_META_PROPS?.access?.user ?? null} accessToken={_META_PROPS?.access?.accessToken ?? null}>
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
