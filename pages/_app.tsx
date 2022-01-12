import { AppProps } from "next/app";
import { ReactElement } from "react";
import { MutableSnapshot, RecoilRoot } from "recoil";
import { setAccessToken } from "../api";
import { authUserAtom } from "../states/auth";
import { GlobalStyle } from "../styles/globalStyle";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const { accessToken, userInfo, ...otherPageProps } = pageProps;

  setAccessToken(accessToken);

  function initState({ set }: MutableSnapshot) {
    set(authUserAtom, userInfo);
  }

  return (
    <RecoilRoot initializeState={initState}>
      <GlobalStyle />
      <Component {...otherPageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
