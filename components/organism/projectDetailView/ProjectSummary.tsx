import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import { BasicTag } from "../../atom/tag/BasicTag";

export interface ProjectSummaryProps {
  className?: string;
  endDate: string; // 프로젝트 모집 종료 기간
  area: string; // 프로젝트 지역
  period: {
    // 프로젝트 예상 기간
    id: number; // 프로젝트 예상 기간 id
    name: string; // 프로젝트 예상 기간 이름
  };
  position: // 프로젝트 모집 포지션
  {
    id: number; // 프로젝트 모집 포지션 id
    name: string; // 프로젝트 모집 포지션 이름
    positionNum: {
      //  프로젝트 모집 인원
      id: number; // 프로젝트 모집 포지션 인원 id
      name: string; // 프로젝트 모집 포지션 인원 이름
    };
  }[];
  goal: {
    // 프로젝트 목표
    id: number; // 프로젝트 목표 id
    name: string; // 프로젝트 목표 이름
  };
  tag: // 프로젝트 선호 협업 성향
  {
    id: number; // 프로젝트 선호 협업 성향 id
    name: string; // 프로젝트 선호 협업 성향 이름
  }[];
  field: // 프로젝트 분야
  {
    id: number; // 프로젝트 분야 id
    name: string; // 프로젝트 분야 이름
  }[];
}

export function ProjectSummary(props: ProjectSummaryProps) {
  const { className, endDate, area, period, position, goal, tag, field } = props;

  return (
    <StyledWrapper className={className}>
      <StyledField>
        <StyledLeft>프로젝트 예상 기간</StyledLeft>
        <StyledRight>{period.name}</StyledRight>
      </StyledField>
      <StyledField>
        <StyledLeft>모집 포지션</StyledLeft>
        <StyledRight>
          {position.map((key) => (
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
        <StyledRight>{goal.name}</StyledRight>
      </StyledField>
      <StyledField>
        <StyledLeft>선호 협업 성향</StyledLeft>
        <StyledRight>
          <StyledTagWrapper>
            {tag.map((key) => (
              <BasicTag key={key.id} id={key.id}>
                {key.name}
              </BasicTag>
            ))}
          </StyledTagWrapper>
        </StyledRight>
      </StyledField>
      <StyledField>
        <StyledLeft>프로젝트 분야</StyledLeft>
        <StyledRight>
          <StyledTagWrapper>
            {field.map((key) => (
              <BasicTag key={key.id} id={+key}>
                {key.name}
              </BasicTag>
            ))}
          </StyledTagWrapper>
        </StyledRight>
      </StyledField>
      <StyledField>
        <StyledLeft>지역</StyledLeft>
        <StyledRight>{area}</StyledRight>
      </StyledField>
      <StyledField>
        <StyledLeft>모집 기간</StyledLeft>
        <StyledRight>{endDate}</StyledRight>
      </StyledField>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledField = styled.div`
  display: flex;
  width: 51rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const StyledLeft = styled.div`
  width: 21rem;
  font-size: 24px;
  font-weight: 700;
`;

const StyledRight = styled.div`
  display: flex;
  font-size: 24px;
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

  & > div + div {
    margin-left: 0.8rem;
  }
`;
