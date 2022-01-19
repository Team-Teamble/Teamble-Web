import { setLayout } from "../../utils/layout";
import { withAuth } from "../../utils/ssr";
import { TendencyEndSet } from "../../utils/tendency";

interface TendencyProps {
  stateKey: string;
}

export default function Tendency(props: TendencyProps) {
  const { stateKey } = props;

  return <div>협업 성향 결과보기: ({stateKey})</div>;
}

setLayout(Tendency, ({ children }) => <div>{children}</div>);

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

const results: TendencyEndSet = {
  D: {
    annotation: "열정적인 레드 컬러로 팀을 부스트업해주는",
    imageURL: "http://~~~",
    name: "직진모드 깡블리",
    tags: ["진취적인", "주도적인", "결단력있는", "지도력있는", "목표지향적인"],
    messageFirst: "프로젝트 내의 감독같은 당신,",
    messageSecond: "정직하고 진취적인 추진력에 팀원들은 당신이 만들어가는 씬의 일부가 되고 싶을 거예요",
    characteristics: [
      "도전적이고 결과를 빨리 얻고싶어해요.",
      "승부욕이 높고 경쟁을 즐기는 편이에요. 이런 성격이 다른 사람들에게 동기부여를 해줘요!",
      "지향하는 목표와 결과에 대해 높은 추진력으로 결과를 이끌어내는 것을 선호해요.",
      "솔직하고 직접적으로 대화하는 것을 좋아해요.",
      "결과와 현실적인 기대에 집중해요.",
    ],
    toFix:
      "매 순간 결과를 향해 열정적으로 달려가는 것도 좋지만 가끔은 작은 것들을 내려두고, 팀원들과 함께 대화하며 목표에 조율해보는 건 어떨까요? 이런 과정이 당신이 놓칠 수 있는 세심한 부분들을 캐치하는 통찰력을 길러줄거에요. 팀원들과 일대일로 이야기하며 세세한 부분을 이해하고, 지향하는 바에대해서 알리고 함께 논의한다면, 더 멋진 결과를 이뤄낼 수 있을거에요.",
    preferEnvironment: [
      "팀원들과 소통이 활발한 분위기",
      "함께 일하기 좋은 편하고 조직적인 분위기",
      "창의적인 아이디어를 표출할 수 있는 곳",
      "새롭고 흥미로운 기회가 풍부한 곳",
    ],
    bestBlend:
      "직진모드 깡블리는 프로조율러 옼블리와 함께 일할때 서로 시너지를 낼 수 있어요. 깡블리의 넘치는 행동력과 빠른 작업 효율과 옼블리의 친절하고 성실한 성격이 합쳐진다면, 팀이 목표를 향해 진취적으로 나아가며 평화로운 분위기가 공존하는 팀을 만들 수 있을거예요!",
  },
  DI: {
    annotation: "열정적인 레드 컬러로 팀을 부스트업해주는",
    imageURL: "http://~~~",
    name: "직진모드 깡블리",
    tags: ["진취적인", "주도적인", "결단력있는", "지도력있는", "목표지향적인"],
    messageFirst: "프로젝트 내의 감독같은 당신,",
    messageSecond: "정직하고 진취적인 추진력에 팀원들은 당신이 만들어가는 씬의 일부가 되고 싶을 거예요",
    characteristics: [
      "도전적이고 결과를 빨리 얻고싶어해요.",
      "승부욕이 높고 경쟁을 즐기는 편이에요. 이런 성격이 다른 사람들에게 동기부여를 해줘요!",
      "지향하는 목표와 결과에 대해 높은 추진력으로 결과를 이끌어내는 것을 선호해요.",
      "솔직하고 직접적으로 대화하는 것을 좋아해요.",
      "결과와 현실적인 기대에 집중해요.",
    ],
    toFix:
      "매 순간 결과를 향해 열정적으로 달려가는 것도 좋지만 가끔은 작은 것들을 내려두고, 팀원들과 함께 대화하며 목표에 조율해보는 건 어떨까요? 이런 과정이 당신이 놓칠 수 있는 세심한 부분들을 캐치하는 통찰력을 길러줄거에요. 팀원들과 일대일로 이야기하며 세세한 부분을 이해하고, 지향하는 바에대해서 알리고 함께 논의한다면, 더 멋진 결과를 이뤄낼 수 있을거에요.",
    preferEnvironment: [
      "팀원들과 소통이 활발한 분위기",
      "함께 일하기 좋은 편하고 조직적인 분위기",
      "창의적인 아이디어를 표출할 수 있는 곳",
      "새롭고 흥미로운 기회가 풍부한 곳",
    ],
    bestBlend:
      "직진모드 깡블리는 프로조율러 옼블리와 함께 일할때 서로 시너지를 낼 수 있어요. 깡블리의 넘치는 행동력과 빠른 작업 효율과 옼블리의 친절하고 성실한 성격이 합쳐진다면, 팀이 목표를 향해 진취적으로 나아가며 평화로운 분위기가 공존하는 팀을 만들 수 있을거예요!",
  },
};
