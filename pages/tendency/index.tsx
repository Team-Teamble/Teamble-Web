import { useRouter } from "next/router";
import { TendencyInit } from "../../components/organism/tendency/TendencyInit";
import { TendencyTest } from "../../components/organism/tendency/TendencyTest";
import { setLayout } from "../../utils/layout";
import { withAuth } from "../../utils/ssr";
import { tendencyTestData, useTendencyState } from "../../utils/tendency";

export default function TendencyCheck() {
  const router = useRouter();
  const { state, error, moveNextState } = useTendencyState(tendencyTestData, {
    onEnd(endKey) {
      router.push(`/tendency/${endKey}`);
    },
  });

  if (error) {
    return <div>ERROR: {error.message}</div>;
  }

  if (state === null) {
    return <TendencyInit onStart={() => moveNextState(0)} />;
  }

  return (
    <TendencyTest
      title={state.title}
      description={state.question.message}
      picks={state.question.picks}
      onChoose={(idx) => moveNextState(idx)}
    />
  );
}

setLayout(TendencyCheck, ({ children }) => <div>{children}</div>);

export const getServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});