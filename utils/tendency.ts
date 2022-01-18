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
