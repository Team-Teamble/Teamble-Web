import React from "react";
import styled from "styled-components";
import { ProjectDetail } from "../../../api/project";
import { teambleColors } from "../../../styles/color";

export interface ProjectSummaryProps {
  className?: string;

  projectDetail: ProjectDetail;
}

export function ProjectSummary(props: ProjectSummaryProps) {
  const { className, projectDetail } = props;

  return (
    <StyledWrapper className={className}>
      <StyledField>
        <StyledLeft>프로젝트 예상 기간</StyledLeft>
        <StyledRight>{projectDetail.project.period.name}</StyledRight>
      </StyledField>
      <StyledField>
        <StyledLeft>모집 포지션</StyledLeft>
        <StyledRight>
          {projectDetail.project.position.map((key) => (
            <>
              <div>
                {key.name} {key.positionNum.name}명
              </div>
            </>
          ))}
        </StyledRight>
      </StyledField>
      <StyledField>
        <StyledLeft>목표</StyledLeft>
        <StyledRight>{projectDetail.project.goal.name}</StyledRight>
      </StyledField>
      <StyledField>
        <StyledLeft>선호 협업 성향</StyledLeft>
        <StyledRight>
          <StyledTagWrapper>
            {projectDetail.project.type.map((key) => (
              <StyledTag key={key.id}>{key.name}</StyledTag>
            ))}
          </StyledTagWrapper>
        </StyledRight>
      </StyledField>
      <StyledField>
        <StyledLeft>프로젝트 분야</StyledLeft>
        <StyledRight>
          <StyledTagWrapper>
            {projectDetail.project.field.map((key) => (
              <StyledTag key={key.id}>{key.name}</StyledTag>
            ))}
          </StyledTagWrapper>
        </StyledRight>
      </StyledField>
      <StyledField>
        <StyledLeft>지역</StyledLeft>
        <StyledRight>{projectDetail.project.area}</StyledRight>
      </StyledField>
      <StyledField>
        <StyledLeft>모집 기간</StyledLeft>
        <StyledRight>{projectDetail.project.endDate.slice(0, 10)}</StyledRight>
      </StyledField>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 8.25rem;
  border-bottom: 1px solid ${teambleColors.deepGray};
  margin-bottom: 5.8rem;
`;

const StyledField = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const StyledLeft = styled.div`
  width: 19rem;
  font-size: 18px;
  font-weight: 700;
  color: ${teambleColors.black};
`;

const StyledRight = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 700;
  color: ${teambleColors.darkGray};

  & > div:not(:first-child) {
    padding-left: 1.25rem;
  }
  & > div:not(:last-child) {
    border-right: 1px solid black;
    padding-right: 1.25rem;
  }
`;

const StyledTagWrapper = styled.div`
  display: flex;

  & > button + button {
    margin-left: 0.9rem;
  }
`;

const StyledTag = styled.button`
  display: inline-block;

  background-color: ${teambleColors.lightPurple};
  color: ${teambleColors.black};
  border: 1px solid ${teambleColors.deepPurple};
  border-radius: 22px;
  font-size: 16px;
  font-weight: 500;
  padding: 0.6rem 1.25rem;
`;
