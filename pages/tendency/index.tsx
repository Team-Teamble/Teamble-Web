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
    questions: [
      {
        message: "프로젝트를 시작할때 혹은 함께하는 팀 프로젝트에서 나는 주로 이런 일을 한다!",
        picks: [
          '"나는야 ! 프로젝트 팀장 ! 플젝 완성을 위해 추진하는 추진왕 나야나!"',
          '"영차! 영차 ! 프로젝트 팀원은 내가 모을게! 필요한 자원은 내가 찾아올게!"',
          '"팀원들이 말하는 의견 든든~히 내가 지지해주고, 결정을 잘 따르는st의 평화주의자!!"',
          '"프로젝트 계획 나한테 맞겨! 프로젝트에서 내가 맡은 일은 척척 꼼꼼히 내가 다 해낸다!"',
        ],
      },
    ],
    nextState: {
      "1": {
        to: "2DvsDI",
      },
      "2": {
        to: "2IvsID",
      },
      "3": {
        to: "2SvsSC",
      },
      "4": {
        to: "2CvsCS",
      },
    },
  },
  "2DvsDI": {
    title: "Q2",
    questions: [
      {
        message: "나로인해 프로젝트에 차질이 생겼을때 당신이 가장 먼저 드는 생각은?",
        picks: ["이런 결과밖에 못낸 사진에게 화가 난다.", "팀원들이 나를 어떻게 생각할까 걱정한다."],
      },
    ],
    nextState: {
      "1": {
        to: "3DvsDC",
      },
      "2": {
        to: "3DIvsDC",
      },
    },
  },
  "3DvsDC": {
    title: "Q3",
    questions: [
      {
        message: "내가 추구하는 업무 스타일은?",
        picks: [
          "경쟁의식을 불러일으킬만한 새로운 도전을 선호한다.",
          "기존데이터에 기반해 안정적으로 업무를 진행해나가는 것을 선호한다.",
        ],
      },
    ],
    nextState: {
      "1": {
        end: "D",
      },
      "2": {
        end: "DC",
      },
    },
  },
  "3DIvsDC": {
    title: "Q3",
    questions: [
      {
        message: "우리 팀 프로젝트와 관련된 자료를 찾았을때 나의 모습은?",
        picks: [
          "일단 혼자서 자료를 읽어보고 분석하고 정리한다.",
          "자료를 바로 단톡에 공유하고 팀원들과 자료에 대해서 논의한다.",
        ],
      },
    ],
    nextState: {
      "1": {
        end: "DI",
      },
      "2": {
        end: "DC",
      },
    },
  },
  "2IvsID": {
    title: "Q2",
    questions: [
      {
        message: "사람들이 평가하는 나는?",
        picks: ["따뜻하고 재밋는 사람", "유능하고 실용적인 사람"],
      },
    ],
    nextState: {
      "1": {
        to: "3IvsIS",
      },
      "2": {
        to: "3IDvsIS",
      },
    },
  },
  "3IvsIS": {
    title: "Q3",
    questions: [
      {
        message: "나는 맡은 업무를 마무리했는데, 팀원 중 한명이 일처리가 안되고 있다면 나는?",
        picks: [
          "'혹시 이 부분을 조율하면 이 시간까지 마무리 될 수 있을까요?'라고 협상한다.",
          "'혹시 제가 도와드릴것 없나요?'라고 나서서 도와준다.",
        ],
      },
    ],
    nextState: {
      "1": {
        end: "I",
      },
      "2": {
        end: "IS",
      },
    },
  },
  "3IDvsIS": {
    title: "Q3",
    questions: [
      {
        message: "서로 맡게 된 업무의 프로세스 중 이해가 안되는 부분이 있을 때, 당신의 행동은?",
        picks: [
          "기존 규칙과는 조금 다르게 프로세스를 약간 바꿔본다.",
          "짜여진 규칙과 체계에는 이유가 있다고 생각하고 따른다.",
        ],
      },
    ],
    nextState: {
      "1": {
        end: "ID",
      },
      "2": {
        end: "IS",
      },
    },
  },
  "2SvsSC": {
    title: "Q2",
    questions: [
      {
        message: "우리 팀에 새로 들어온 팀원 중 한명이 일처리가 안되고 있다면 나는?",
        picks: [
          "'혹시, 어떤 부분에서 문제가 생긴거야? 내가 도와줄 수 있는 부분이면 도와줄게!'",
          "'내가 자료를 보니까 이런 부분이 문제여서 어려운 것 같은데, 이런식으로 같이 해결해보는건 어때?'",
        ],
      },
    ],
    nextState: {
      "1": {
        to: "3SvsIS",
      },
      "2": {
        to: "3SCvsIS",
      },
    },
  },
  "3SvsIS": {
    title: "Q3",
    questions: [
      {
        message: "프로젝트 진행 중 이해가지 않는 부분이 있을때 나와 더 가까운 모습은?",
        picks: [
          "다른 팀원들이랑 이야기를 한 후, 대부분이 동의하는 의견을 수용한다.",
          "팀원들에게 내가 생각하는 부분을 설명하고, 팀원들을 설득하여 의견을 조율한다.",
        ],
      },
    ],
    nextState: {
      "1": {
        end: "S",
      },
      "2": {
        end: "IS",
      },
    },
  },
  "3SCvsIS": {
    title: "Q3",
    questions: [
      {
        message: "당신이 추진하던 일이 생각지도 못한 난관에 부딪혔다! 중간보고까지 3일이 남은 상태. 당신의 선택은?",
        picks: [
          "팀장 혹은 다른 팀원들에게 상황을 알리고 조언을 구한다.",
          "난관을 어떻게 해결할 수 있을지 혼자서 신중하게 고민한다.",
        ],
      },
    ],
    nextState: {
      "1": {
        end: "SC",
      },
      "2": {
        end: "IS",
      },
    },
  },
  "2CvsCS": {
    title: "Q2",
    questions: [
      {
        message: "새로 맡게된 업무의 프로세스 중 이해가 가지 않는 부분이 있을때, 나와 더 가까운 모습은?",
        picks: [
          "짜여진 규칙과 체계에는 이유가 있다고 생각하고 따른다.",
          "새로 바뀐 프로세스에 대해 분석해보고, 왜 프로세스가 바뀌었는지 꼼꼼히 확인해본다.",
        ],
      },
    ],
    nextState: {
      "1": {
        to: "3CSvsDC",
      },
      "2": {
        to: "3CvsDC",
      },
    },
  },
  "3CSvsDC": {
    title: "Q3",
    questions: [
      {
        message: "팀원들과 첫 만남, 어색한 분위기에서 나는?",
        picks: [
          '"각자 자기소개부터 하는건 어떨까요?"라고 이야기하며 최대한 대화를 이끈다.',
          '".." 일단 팀원들이 이야기할 때까지 기다린다.',
        ],
      },
    ],
    nextState: {
      "1": {
        end: "DC",
      },
      "2": {
        end: "CS",
      },
    },
  },
  "3CvsDC": {
    title: "Q3",
    questions: [
      {
        message: "평소에 내가 자주 듣는 말은?",
        picks: ["결단력이 있고 기준이 명확하다.", "분석적이고 꼼꼼하다."],
      },
    ],
    nextState: {
      "1": {
        end: "CD",
      },
      "2": {
        end: "C",
      },
    },
  },
};
