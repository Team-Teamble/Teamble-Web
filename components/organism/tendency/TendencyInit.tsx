import Link from "next/link";
import styled from "styled-components";
import TeambleLogo from "../../../assets/svg/logo_img.svg";
import { BasicButton } from "../../atom/button/BasicButton";
import { Characters } from "../../../assets/character";

export interface TendencyInitProps {
  onStart(): void;
}

export function TendencyInit(props: TendencyInitProps) {
  const { onStart } = props;

  return (
    <StyledTendenctInit>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <Description>
        사이드프로젝트 팀에서
        <br />
        나의 협업성향은 무엇일까?
      </Description>
      <AniWrapper>
        <StyledSlider1>
          <Characters.Character1 />
          <Characters.Character2 />
          <Characters.Character3 />
          <Characters.Character4 />
          <Characters.Character5 />
          <Characters.Character6 />
          <Characters.Character8 />
          <Characters.Character7 />
        </StyledSlider1>
        <StyledSlider2>
          <Characters.Character1 />
          <Characters.Character2 />
          <Characters.Character3 />
          <Characters.Character4 />
          <Characters.Character5 />
          <Characters.Character6 />
          <Characters.Character8 />
          <Characters.Character7 />
        </StyledSlider2>
      </AniWrapper>

      <StartButton onClick={() => onStart && onStart()} variant="outlined">
        팀블유형 테스트 시작하기
      </StartButton>
    </StyledTendenctInit>
  );
}
const AniWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
`;
const StyledTendenctInit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
  min-height: 100vh;
  width: 100%;

  @media screen and (max-width: 767px) {
    /* Mobile */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }
`;

const Logo = styled(TeambleLogo)`
  transform: scale(1.3);
  @media screen and (max-width: 767px) {
    /* Mobile */
    transform: scale(0.5);
  }
`;

const Description = styled.h1`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  display: block;
  width: 100%;
  line-height: 2.3rem;
  letter-spacing: -0.02em;

  margin-top: 3rem;

  @media screen and (max-width: 767px) {
    /* Mobile */
    font-size: 1.5rem;
  }
`;

const StartButton = styled(BasicButton)`
  display: block;

  margin-top: 3rem;

  @media screen and (max-width: 767px) {
    /* Mobile */
    font-size: 15px;
    width: calc(100% - 9rem);
  }
`;

const StyledSlider1 = styled.div`
  display: flex;
  width: 100%;
  background-color: transparent;

  & > svg {
    margin-left: 0.7rem;
  }

  @media screen and (max-width: 767px) {
    /* Mobile */
    height: 10rem;

    & > svg:nth-child(7) {
      margin-top: 1.1rem;
    }
  }

  @keyframes slider {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  animation: slider 16s linear infinite;
`;
const StyledSlider2 = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  left: 100%;
  background-color: transparent;

  & > svg {
    margin-left: 0.7rem;
  }

  @media screen and (max-width: 767px) {
    /* Mobile */
    height: 10rem;

    & > svg:nth-child(7) {
      margin-top: 1.1rem;
    }
  }

  @keyframes slider {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  animation: slider 16s linear infinite;
`;
