import { AppProps } from "next/app";
import { ReactElement } from "react";
import { MutableSnapshot, RecoilRoot } from "recoil";
import { GlobalStyle } from "../styles/globalStyle";
import { authTokenAtom } from "../states/auth";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const { accessToken, ...otherPageProps } = pageProps;

  function initState({ set }: MutableSnapshot) {
    set(authTokenAtom, accessToken);
  }

  return (
    <RecoilRoot initializeState={initState}>
      <GlobalStyle />
      <Component {...otherPageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
