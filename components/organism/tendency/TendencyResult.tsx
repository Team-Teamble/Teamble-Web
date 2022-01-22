import styled, { css } from "styled-components";
import copy from "copy-to-clipboard";
import { teambleColors } from "../../../styles/color";
import TeambleLogo from "../../../assets/svg/logo_img.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ClipModal } from "../../molecule/modal/CllpModal";

interface TendencyResultProps {
  resultImgSrc: string;
}

export function TendencyResult(props: TendencyResultProps) {
  const { resultImgSrc } = props;

  const [isMobile, setIsMobile] = useState(false);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleOpen = () => setIsOpened((state) => !state);

  useEffect(() => {
    if (window.innerWidth <= 1023) {
      setIsMobile(true);
    }
  }, []);

  function copyResultURL() {
    copy(location.href);
    handleOpen();
  }

  return (
    <StyledTendencyResult>
      <OutSVG src={isMobile ? resultImgSrc.slice(0, -4) + "_Mobile.svg" : resultImgSrc} />
      <ResultActionBox>
        <ActionButton onClick={copyResultURL}>내 결과 공유하기</ActionButton>
        <Link href="/tendency" passHref>
          <ActionButton filled>나도 테스트하기</ActionButton>
        </Link>
        {isOpened && <ClipModal onClick={handleOpen} isMobile={isMobile} />}
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

  @media (max-width: 376px) {
    max-width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
`;

const OutSVG = styled.img`
  width: 100%;
  min-height: 100vh;

  @media (max-width: 376px) {
    width: 100%;
    min-height: 100%;
  }
`;

const ResultActionBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  font-size: 20vh;
  margin-bottom: 3rem;

  @media (max-width: 376px) {
    display: flex;
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
  align-items: center;

  border-radius: 2.85rem;

  font-size: 1.2rem;

  ${(props) => (props.filled ? filledColorSet : outlinedColorSet)}
  margin-right: 1em;
  @media (max-width: 767px) {
    font-size: 0.8rem;
    height: 1.3rem;
    padding: 0.3rem 1rem;
  }
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

  @media screen and (max-width: 767px) {
    font-size: 0.4rem;
  }
`;

export const Logo = styled(TeambleLogo)`
  margin-top: 2rem;

  @media screen and (max-width: 767px) {
    transform: scale(0.3);
  }
`;
