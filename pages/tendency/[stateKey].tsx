import Head from "next/head";
import { TendencyResult } from "../../components/organism/tendency/TendencyResult";
import { setLayout } from "../../utils/layout";
import { withAuth } from "../../utils/ssr";

interface TendencyProps {
  stateKey: string;
}

export default function Tendency(props: TendencyProps) {
  const { stateKey } = props;

  return (
    <>
      <Head>
        <title>teamble 협업성향 테스트</title>
        <meta property="og:url" content="//teamble.vercel.app/tendency" />
        <meta property="og:title" content="teamble" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="//teamble.vercel.app/teambleThumbnail.png" />
        <meta property="og:description" content="협업성향 테스트" />
      </Head>
      <TendencyResult resultImgSrc={getResultSVGPathByKey(stateKey)} />;
    </>
  );
}

setLayout(Tendency, ({ children }) => <div>{children}</div>);

export const getServerSideProps = withAuth<TendencyProps>(async (context) => {
  const stateKey = context.query.stateKey;

  if (typeof stateKey !== "string" || !possibleKeys.includes(stateKey)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      stateKey: stateKey,
    },
  };
});

const possibleKeys = ["C", "CS", "D", "DC", "DI", "I", "IS", "S", "SC"];

function getResultSVGPathByKey(key: string) {
  return `/tendency/result/${key}.svg`;
}
