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
`;

const MainBox = styled.div`
  width: 80rem;
  & > * {
    display: block;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 6rem;

  color: ${teambleColors.purple};
`;

const Description = styled.h2`
  margin-bottom: 3rem;

  font-size: 3.5rem;
  font-weight: 700;
  line-height: 5rem;
`;

const ButtonGroup = styled.div<{ cols: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols ?? 1}, 1fr);

  column-gap: 1rem;
  row-gap: 4.5rem;
`;

const Button = styled.a`
  height: 10rem;
  line-height: 10rem;
  font-size: 2rem;
  text-align: center;
  width: 100%;

  background-color: ${teambleColors.lightPurple};
  border: 2px solid ${teambleColors.purple};
  border-radius: 1rem;

  cursor: pointer;
`;

const Logo = styled(TeambleLogo)`
  margin: 0 auto;
  margin-top: 4rem;
  transform: scale(1.3);
`;
