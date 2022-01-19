import Link from "next/link";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { TopProjectsOutput } from "../../../api/landing";
import { teambleColors } from "../../../styles/color";
import { ProfileTestButton } from "../../atom/button/ProfileTestButton";
import { ProjectCard } from "../../molecule/projectCard/ProjectCard";
import { Slick } from "../Slick";

export interface HeaderProps {
  className?: string;
  projectCardInfo: TopProjectsOutput;
  children: ReactNode;
  onClick?(): void;
}

export function Header(props: HeaderProps) {
  const { className, children, projectCardInfo, onClick } = props;

  return (
    <StyledWrapper className={className}>
      <StyledTop>
        <StyledTitle>
          <div>
            <p>서로 다른 색의 우리가</p>
            <p>
              만나는 공간, <span>팀블</span>
            </p>
          </div>
        </StyledTitle>
        <StyledBtns>
          <Link href="/" passHref>
            <a>
              <ProfileTestButton />
            </a>
          </Link>
        </StyledBtns>
      </StyledTop>
      <StyledBottom>
        <h3>주목할 만한 프로젝트</h3>
        <StyledSlider>
          <Slick>
            {children}
            {children}
            {children}
            {children}
            {children}
            {children}
            {children}
            {children}
          </Slick>
        </StyledSlider>
      </StyledBottom>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 123.9px);
`;

const StyledTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 37rem);
`;

const StyledTitle = styled.div`
  padding-top: 3.2rem;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 38px;
    font-weight: 700;

    & > p {
      margin-bottom: 0.8rem;

      & > span {
        color: ${teambleColors.deepPurple};
      }
    }
  }

  & > p {
    font-size: 20px;
    font-weight: 700;
    margin-top: 3.5rem;
  }
`;

const StyledBtns = styled.div`
  margin-top: 2rem;

  & > a {
    text-decoration: none;
  }
`;

const StyledBottom = styled.div`
  width: 100%;

  & > h3 {
    font-size: 20px;
    font-weight: 700;
    margin-left: 19rem;
    margin-top: 4rem;
  }
`;

const StyledSlider = styled.div`
  width: 100%;
  margin-top: 2rem;
`;
