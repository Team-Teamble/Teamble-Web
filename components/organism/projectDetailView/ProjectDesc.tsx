import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ProjectDetail } from "../../../api/project";
import { teambleColors } from "../../../styles/color";
import { ConfirmButton } from "../../atom/button/ConfirmButton";
import { StyledSearchBtn } from "../../atom/button/ConfirmButton";
import { CrewTag } from "../../molecule/crewTag/CrewTag";
import { DocumentViewer } from "../../molecule/document/DocumentViewer";

export interface ProjectDescProp {
  className?: string;
  projectDetail: ProjectDetail;
  isOwner: boolean;
  onClick(): void;
}

export function ProjectDesc(props: ProjectDescProp) {
  const { className, projectDetail, isOwner, onClick } = props;

  const [isApply, setIsApply] = useState(false);

  function onCloseProject() {
    // 프로젝트 종료 클릭 시, 메인 화면으로 redirect
    projectDetail.project.isClosed = true;
  }

  function handleCheckApply() {
    setIsApply(() => true);
  }

  return (
    <StyledWrapper className={className}>
      <h3>프로젝트 및 팀 소개</h3>
      <DocumentViewer value={projectDetail.project.description} />
      <StyledCardWrapper>
        {projectDetail.project.member.map((key) => (
          <CrewTag key={key.id} photo={key.photo} user={key.name} isEditView={false} />
        ))}
      </StyledCardWrapper>
      {isOwner ? (
        <ConfirmButton onClick={onCloseProject}>프로젝트 종료</ConfirmButton>
      ) : isApply ? (
        <CustomConfirmBtn>팀 지원완료</CustomConfirmBtn>
      ) : (
        <ConfirmButton onClick={handleCheckApply}>팀 지원하기</ConfirmButton>
      )}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h3 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 4.25rem;
  }

  & > textarea {
    resize: none;
    width: 62rem;
    height: 39.5rem;
    border: 3px solid ${teambleColors.gray};
    font-size: 20px;
  }

  & > div {
    width: 62rem;
    display: flex;
    margin-top: 1.5rem;
  }
  & > button {
    cursor: pointer;
    margin-top: 5.8rem;
  }
`;
const StyledCardWrapper = styled.div``;
const CustomConfirmBtn = styled(StyledSearchBtn)`
  background-color: ${teambleColors.deepPurple};
  border: 0;
  color: ${teambleColors.white};
`;
