import styled, { css } from "styled-components";
import copy from "copy-to-clipboard";
import { teambleColors } from "../../../styles/color";
import TeambleLogo from "../../../assets/svg/logo_img.svg";
import Link from "next/link";

interface TendencyResultProps {
  resultImgSrc: string;
}

export function TendencyResult(props: TendencyResultProps) {
  const { resultImgSrc } = props;

  function copyResultURL() {
    copy(location.href);
    alert("주소가 복사되었습니다!");
  }

  return (
    <StyledTendencyResult>
      <OutSVG src={resultImgSrc} />
      <ResultActionBox>
        <ActionButton onClick={copyResultURL}>내 결과 공유하기</ActionButton>
        <Link href="/tendency" passHref>
          <ActionButton filled>나도 테스트하기</ActionButton>
        </Link>
      </ResultActionBox>
      <Information>나와 잘 맞는 협업 프로젝트와 팀원을 찾고 싶다면?</Information>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
    </StyledTendencyResult>
  );
}

const StyledTendencyResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-bottom: 3rem;
`;

const OutSVG = styled.img`
  width: 100%;
`;

const ResultActionBox = styled.div`
  display: flex;
  justify-content: center;

  font-size: 20vh;
  margin-bottom: 3rem;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const ActionButton = styled.a<{ filled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  text-decoration: none;

  padding: 0.3rem 2.5rem;
  height: 2.3rem;

  border-radius: 2.85rem;

  font-size: 1.2rem;

  ${(props) => (props.filled ? filledColorSet : outlinedColorSet)}
`;

const filledColorSet = css`
  background-color: ${teambleColors.darkPurple};
  border: 2px solid ${teambleColors.darkPurple};
  color: ${teambleColors.white};

  &:hover {
    background-color: ${teambleColors.purple};
    border: 2px solid ${teambleColors.purple};
    color: ${teambleColors.white};
  }
`;

const outlinedColorSet = css`
  background-color: ${teambleColors.white};
  border: 2px solid ${teambleColors.deepPurple};
  color: ${teambleColors.deepPurple};

  &:hover {
    background-color: ${teambleColors.deepPurple};
    border: 2px solid ${teambleColors.deepPurple};
    color: ${teambleColors.white};
  }
`;

export const Information = styled.p`
  font-size: 1.1rem;
  color: ${teambleColors.darkGray};
`;

export const Logo = styled(TeambleLogo)`
  margin-top: 2rem;
`;
