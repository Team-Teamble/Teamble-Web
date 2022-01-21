import { useRouter } from "next/router";
import { TendencyInit } from "../../components/organism/tendency/TendencyInit";
import { TendencyTest } from "../../components/organism/tendency/TendencyTest";
import { setLayout } from "../../utils/layout";
import { withAuth } from "../../utils/ssr";
import { tendencyTestData, useTendencyState } from "../../utils/tendency";
import Head from "next/head";
import { ReactNode } from "react";

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
    return (
      <HeadTemplate>
        <TendencyInit onStart={() => moveNextState(0)} />
      </HeadTemplate>
    );
  }

  return (
    <HeadTemplate>
      <TendencyTest
        title={state.title}
        description={state.question.message}
        picks={state.question.picks}
        onChoose={(idx) => moveNextState(idx)}
      />
    </HeadTemplate>
  );
}

setLayout(TendencyCheck, ({ children }) => <div>{children}</div>);

export const getServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});

function HeadTemplate({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>teamble 협업성향 테스트</title>
      </Head>
      {children}
    </>
  );
}
