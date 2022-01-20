import { useState } from "react";

export interface TendencyTestState {
  title: string;
  questions: {
    message: string;
    picks: string[];
  }[];
  nextState: {
    [on: string]: {
      to?: string;
      end?: string;
    };
  };
}

export interface TendencyTestSet {
  [key: string]: TendencyTestState;
}

export interface TendencyEndState {
  annotation: string;
  imageURL: string;
  name: string;
  tags: string[];
  messageFirst: string;
  messageSecond: string;
  characteristics: string[];
  toFix: string;
  preferEnvironment: string[];
  bestBlend: string;
}

export interface TendencyEndSet {
  [key: string]: TendencyEndState;
}

export function useTendencyState(testSet: TendencyTestSet, callbacks: { onEnd: (endState: string) => void }) {
  const [currentKey, setCurrentKey] = useState<string | null>(null);
  const [selection, setSelection] = useState<number[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const test = (() => {
    if (currentKey === null) {
      return null;
    }
    if (!(currentKey in testSet)) {
      throw new Error(`테스트 키 ${currentKey}가 존재하지 않아요.`);
    }

    return testSet[currentKey];
  })();

  const currentState = (() => {
    if (test === null) {
      return null;
    }

    return { title: test.title, question: test.questions[selection.length] };
  })();

  function moveNextState(select: number) {
    if (test === null) {
      if (!("init" in testSet)) {
        setError(new Error(`테스트 키 ${"init"}이 존재하지 않아요.`));
      } else {
        setCurrentKey("init");
      }
      return;
    }

    const newSelection = [...selection, select];
    const newSelectionStr = newSelection.map((v) => v + 1).join("");

    if (newSelection.length < test.questions.length) {
      newSelection;
    } else if (newSelection.length === test.questions.length) {
      if (newSelectionStr in test.nextState) {
        const next = test.nextState[newSelectionStr];
        if (next.end) {
          callbacks.onEnd(next.end);
        } else if (next.to) {
          if (!(next.to in testSet)) {
            setError(
              new Error(
                `${currentKey} 테스트에서 선택지 모음 ${newSelectionStr} 에 해당하는 다음 테스트 ${next.to} 테스트가 존재하지 않아요.`,
              ),
            );
          }
          setCurrentKey(next.to);
          setSelection([]);
        } else {
          setError(
            new Error(
              `${currentKey} 테스트에서 선택지 모음 ${newSelectionStr} 에 해당하는 다음 상태에 from 또는 to가 존재하지 않아요.`,
            ),
          );
        }
      } else {
        setError(
          new Error(`${currentKey} 테스트에서 결과값 ${newSelectionStr} 에 해당하는 다음 상태가 존재하지 않아요.`),
        );
      }
    } else {
      throw new Error("에러");
    }
  }

  return {
    state: currentState,
    error,
    moveNextState,
  };
}

export const tendencyTestData = {
  init: {
    title: "Q1",
    questions: [
      {
        message: "프로젝트를 시작할때 혹은 함께하는 프로젝트에서 나는 주로 이런 일을 한다!",
        picks: [
          '"나는야! 프로젝트 팀장! 프로젝트 완성을 추진하는 추진왕 나야나!"',
          '"영차! 영차! 프로젝트 팀원은 내가 모아두고, 필요한 자원은 내가 찾아올게!"',
          '"팀원들이 제시하는 의견 든든히  지지해주고, 결정을 잘 따르는st의 평화주의자!"',
          '"프로젝트 계획 나한테 맡겨줘! 프로젝트에서 내가 맡은 일은 척척,꼼꼼히 내가 다 해낸다!"',
        ],
      },
    ],
    nextState: {
      "1": {
        to: "2DvsDI",
      },
      "2": {
        to: "2IvsDI",
      },
      "3": {
        to: "2SvsCS",
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
        picks: ["이런 결과밖에 못낸 나 자신에게 화가 난다.", "팀원들이 나를 어떻게 생각할지 걱정한다."],
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
          "경쟁의식을 불러 일으킬만한 새로운 도전을 선호한다.",
          "기존 데이터를 기반으로 안정적이게 업무를 진행해나가는 것을 선호한다.",
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
        message: "우리 팀 프로젝트와 관련된 자료를 찾았을때 내의 모습은?",
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
  "2IvsDI": {
    title: "Q2",
    questions: [
      {
        message: "사람들이 평가하는 내 모습은?",
        picks: ["따뜻하고 재미있는 사람", "유능하고 실용적인 사람"],
      },
    ],
    nextState: {
      "1": {
        to: "3IvsIS",
      },
      "2": {
        to: "3DIvsIS",
      },
    },
  },
  "3IvsIS": {
    title: "Q3",
    questions: [
      {
        message: "나는 맡은 업무를 마무리 했는데, 팀원 중 한명이 일처리가 안되고 있을때 내 모습은?",
        picks: [
          "'혹시 이 부분을 조율하면 이 시간까지 마무리 될 수 있을까요?'라고 협상한다.",
          "'혹시 제가 도와 드릴 것 없나요?'라고 나서서 도와준다.",
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
  "3DIvsIS": {
    title: "Q3",
    questions: [
      {
        message: "서로 맡게 된 업무의 프로세스 중 이해가 안되는 부분이 있을 때, 당신의 행동은?",
        picks: [
          "기존 규칙과 조금 다르게 프로세스를 약간 바꿔본다.",
          "짜여진 규칙과 체계에는 이유가 있다고 생각하고 따른다.",
        ],
      },
    ],
    nextState: {
      "1": {
        end: "DI",
      },
      "2": {
        end: "IS",
      },
    },
  },
  "2SvsCS": {
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
        to: "3CSvsIS",
      },
    },
  },
  "3SvsIS": {
    title: "Q3",
    questions: [
      {
        message: "프로젝트 진행 중 이해가지 않는 부분이 있는 경우, 나와 더 가까운 모습은?",
        picks: [
          "다른 팀원들과 먼저 이야기를 한 후, 대부분 동의하는 의견을 수용한다.",
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
  "3CSvsIS": {
    title: "Q3",
    questions: [
      {
        message: "당신이 추진하던 일이 생각지도 못한 난관에 부딪혔다! 프로젝트 마감이 3일이 남은 상태, 당신의 선택은?",
        picks: [
          "팀장 혹은 다른 팀원들에게 상황을 알리고 조언을 구한다.",
          "난관을 어떻게 해결할 수 있을지 혼자서 신중하게 고민한다.",
        ],
      },
    ],
    nextState: {
      "1": {
        end: "CS",
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
          "새로 바뀐 프로세스에 대해 분석해보고, 왜 프로세스가 바뀌었는지 꼼꼼히 확인 해본다.",
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
        message: "팀원과의 첫 만남, 어색한 분위기에서 나는?",
        picks: [
          '"각자 자기소개부터 하는건 어떤까요?"라고 이야기하며 최대한 대화를 이끈다.',
          '".." 일단 다른 팀원이 이야기할 때까지 기다린다.',
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
        end: "DC",
      },
      "2": {
        end: "C",
      },
    },
  },
};
