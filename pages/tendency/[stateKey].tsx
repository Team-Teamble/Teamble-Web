import { TendencyResult } from "../../components/organism/tendency/TendencyResult";
import { setLayout } from "../../utils/layout";
import { withAuth } from "../../utils/ssr";

interface TendencyProps {
  stateKey: string;
}

export default function Tendency(props: TendencyProps) {
  const { stateKey } = props;

  return <TendencyResult resultImgSrc={getResultSVGPathByKey(stateKey)} />;
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
