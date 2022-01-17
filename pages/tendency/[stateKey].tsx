import { withAuth } from "../../utils/ssr";

interface TendencyProps {
  stateKey: string;
}

export default function Tendency(props: TendencyProps) {
  const { stateKey } = props;

  return <div>협업 성향 결과보기: ({stateKey})</div>;
}

export const getServerSideProps = withAuth<TendencyProps>(async (context) => {
  const stateKey = context.query.stateKey;

  if (typeof stateKey !== "string") {
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
