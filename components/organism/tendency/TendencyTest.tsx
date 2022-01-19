import styled from "styled-components";
import TeambleLogo from "../../../assets/svg/logo_img.svg";
import { teambleColors } from "../../../styles/color";

export interface TendencyTestProps {
  title: string;
  description: string;
  picks: string[];
  onChoose?(idx: number): void;
}

export function TendencyTest(props: TendencyTestProps) {
  const {
    title,
    description,
    picks,
    onChoose = () => {
      return;
    },
  } = props;

  const buttonCols = (() => {
    if (picks.length === 2) {
      return 1;
    }
    return 2;
  })();

  return (
    <StyledTendencyTest>
      <MainBox>
        <Title>{title}</Title>
        <Line />
        <Description>{description}</Description>
        <ButtonGroup cols={buttonCols}>
          {picks.map((pick, idx) => (
            <Button key={pick} onClick={() => onChoose(idx)}>
              {pick}
            </Button>
          ))}
        </ButtonGroup>
        <Logo />
      </MainBox>
    </StyledTendencyTest>
  );
}

const StyledTendencyTest = styled.div`
  display: flex;
  padding: 5rem;

  justify-content: center;

  & * {
    box-sizing: border-box;
  }
`;

const MainBox = styled.div`
  width: 80rem;
  & > * {
    display: block;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  word-break: keep-all;

  color: ${teambleColors.purple};

  margin-bottom: 2rem;
`;

const Line = styled.span`
  height: 0.3rem;
  width: 3rem;
  background-color: ${teambleColors.purple};
`;

const Description = styled.h2`
  margin-top: 1rem;
  margin-bottom: 3.7rem;
  word-break: keep-all;

  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 700;
`;

const ButtonGroup = styled.div<{ cols: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols ?? 1}, 1fr);

  column-gap: 1rem;
  row-gap: 2rem;
`;

const Button = styled.a`
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  line-height: 1.7rem;
  text-align: center;
  width: 100%;

  padding: 0.5rem 1.4rem;

  background-color: ${teambleColors.lightPurple};
  border: 2px solid ${teambleColors.purple};
  border-radius: 1rem;

  word-break: keep-all;
  cursor: pointer;

  &:hover {
    background-color: ${teambleColors.purple};
    color: ${teambleColors.white};
  }
`;

const Logo = styled(TeambleLogo)`
  margin: 0 auto;
  margin-top: 4rem;
  transform: scale(1.3);
`;
