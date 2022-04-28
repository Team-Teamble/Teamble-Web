import Head from "next/head";
import { useRouter } from "next/router";
import { TendencyResult } from "../../components/organism/tendency/TendencyResult";
import { setLayout } from "../../utils/layout";

export default function Tendency() {
  const router = useRouter();

  const { stateKey } = router.query;

  if (typeof stateKey !== "string" || !possibleKeys.includes(stateKey)) {
    return <div>404</div>;
  }

  return (
    <>
      <Head>
        <title>teamble 협업성향 테스트</title>
        <meta property="og:url" content="//teamble.vercel.app/tendency" />
        <meta property="og:title" content="teamble" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="//teamble.vercel.app/teambleTendencyThumbnail.png" />
        <meta property="og:description" content="협업성향 테스트" />
      </Head>
      <TendencyResult resultImgSrc={getResultSVGPathByKey(stateKey)} />;
    </>
  );
}

setLayout(Tendency, ({ children }) => <div>{children}</div>);

const possibleKeys = [
  "C",
  "CS",
  "D",
  "DC",
  "DI",
  "I",
  "IS",
  "S",
  "SC",
  "C_Mobile",
  "CS_Mobile",
  "D_Mobile",
  "DC_Mobile",
  "DI_Mobile",
  "I_Mobile",
  "IS_Mobile",
  "S_Mobile",
  "SC_Mobile",
];

function getResultSVGPathByKey(key: string) {
  return `/tendency/result/${key}.svg`;
}
