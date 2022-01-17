import React from "react";
import styled from "styled-components";
import { ProjectDetail } from "../../../api/project";
import { teambleColors } from "../../../styles/color";
import { ImgWrapper } from "../../atom/image/ImgWrapper";
import { ProfileImage } from "../../atom/image/ProfileImage";

export interface ProjectHeaderProps {
  className?: string;
  projectDetail: ProjectDetail;
}

export function ProjectHeader(props: ProjectHeaderProps) {
  const { className, projectDetail } = props;
  return (
    <StyledWrapper className={className}>
      <StyledLeft>
        <StyledTitleWrapper>
          <StyledTitle>{projectDetail.project.title}</StyledTitle>
          <StyledIntro>{projectDetail.project.intro}</StyledIntro>
        </StyledTitleWrapper>
        <StyledUser>
          <ProfileImage profileSize="extra-small" profileImgSrc={projectDetail.project.user.photo} />
          <span>{projectDetail.project.user.name}</span>
        </StyledUser>
      </StyledLeft>
      <StyledRight>
        <StyledImg>
          <ImgWrapper ratio="100%">
            <img src={projectDetail.project.photo} alt="project-photo" />
          </ImgWrapper>
        </StyledImg>
      </StyledRight>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 7.8rem;
  margin-bottom: 11rem;
`;

const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 54.5rem;
  margin-top: 1.5rem;
`;

const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.span`
  font-size: 30px;
  font-weight: 400;
  color: ${teambleColors.deepGray};
  margin-bottom: 4.4rem;
`;

const StyledIntro = styled.span`
  font-size: 40px;
  font-weight: 700;
  color: ${teambleColors.darkGray};
`;

const StyledUser = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${teambleColors.deepGray};

  & > span {
    margin-left: 0.2rem;
  }
`;

const StyledImg = styled.div`
  width: 32rem;
  height: 32rem;
  overflow: hidden;
`;
