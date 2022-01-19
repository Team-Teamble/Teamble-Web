import { useRouter } from "next/router";
import { TendencyInit } from "../../components/organism/tendency/TendencyInit";
import { TendencyTest } from "../../components/organism/tendency/TendencyTest";
import { setLayout } from "../../utils/layout";
import { withAuth } from "../../utils/ssr";
import { TendencyTestSet, useTendencyState } from "../../utils/tendency";

export default function TendencyCheck() {
  const router = useRouter();
  const { state, error, moveNextState } = useTendencyState(testSet, {
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

const testSet: TendencyTestSet = {
  init: {
    title: "Q1",
    questions: [{ message: "스트레스를 많이 받았을 때 당신은", picks: ["D일때", "I일때", "S일때", "C알때"] }],
    nextState: {
      "1": { to: "2DvsDI" },
      "2": { to: "2IvsID" },
      "3": { to: "2SvsSC" },
      "4": { to: "2CvsCS" },
    },
  },
  "2DvsDI": {
    title: "D vs DI",
    questions: [{ message: "D 와 DI 를 구분하는 질문", picks: ["D일때", "DI일때"] }],
    nextState: {
      "1": { to: "3DvsDC" },
      "2": { to: "3DIvsDC" },
    },
  },
  "3DvsDC": {
    title: "D vs DC",
    questions: [{ message: "D와 DC를 구별하는 질문", picks: ["D일때", "DC일때"] }],
    nextState: {
      "1": { end: "D" },
      "2": { end: "DC" },
    },
  },
  "3DIvsDC": {
    title: "DI vs DC",
    questions: [{ message: "DI와 DC를 구별하는 질문", picks: ["DI일때", "DC일때"] }],
    nextState: {
      "1": { end: "DI" },
      "2": { end: "DC" },
    },
  },
};
