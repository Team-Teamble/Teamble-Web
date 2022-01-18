import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { TopProjectsOutput } from "../../../api/landing";
import { teambleColors } from "../../../styles/color";
import { BannerButton } from "../../atom/banner-btn/BannerBtn";
import { ProjectCard } from "../../molecule/projectCard/ProjectCard";
import { Slick } from "../Slick";

export interface HeaderProps {
  className?: string;
  projectCardInfo: TopProjectsOutput;
  onClick?(): void;
}

export function Header(props: HeaderProps) {
  const { className, projectCardInfo, onClick } = props;

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
          <p>“우리 팀블하자!~”</p>
        </StyledTitle>
        <StyledBtns>
          <Link href="/project/search" passHref>
            <a>
              <BannerButton title="사이드 프로젝트 찾기" desc="나에게 잘 맞는 사이드 프로젝트 탐색하기 "></BannerButton>
            </a>
          </Link>

          <Link href="/profile" passHref>
            <a>
              <BannerButton title="함께 할 팀원 찾기" desc="협업하기 좋은 사이드 프로젝트 팀원 찾기 "></BannerButton>{" "}
            </a>
          </Link>

          <Link href="/" passHref>
            <a>
              <BannerButton title="나의 협업 성향 테스트" desc="협업 성향 파악하고 딱맞는 팀빌딩하기"></BannerButton>
            </a>
          </Link>
        </StyledBtns>
      </StyledTop>
      <StyledBottom>
        <Slick>
          <ProjectCard />
        </Slick>
      </StyledBottom>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 121.74px);
`;

const StyledTop = styled.div`
  display: flex;
  width: calc(100% - 40rem);
  justify-content: space-between;
  margin-top: 4rem;
`;

const StyledTitle = styled.div`
  padding-top: 4.2rem;
  & > div {
    font-size: 48px;
    font-weight: 700;

    & > p {
      margin-bottom: 0.8rem;

      & > span {
        color: ${teambleColors.deepPurple};
      }
    }
  }

  & > p {
    font-size: 35px;
    font-weight: 700;
    margin-top: 3.5rem;
  }
`;

const StyledBtns = styled.div`
  & > a {
    text-decoration: none;

    & > a {
      margin-top: 1.2rem;
    }
  }
`;

const StyledBottom = styled.div``;
