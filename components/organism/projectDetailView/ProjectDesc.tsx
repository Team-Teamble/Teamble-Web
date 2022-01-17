import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import { ConfirmButton } from "../../atom/button/ConfirmButton";

export interface ProjectDescProp {
  className?: string;
  description: string;
  onClick(): void;
}

export function ProjectDesc(props: ProjectDescProp) {
  const { className, description, onClick } = props;
  return (
    <StyledWrapper className={className}>
      <h3>프로젝트 및 팀 소개</h3>
      <textarea name="desc" id="project-desc" cols={30} rows={10} readOnly>
        {description}
      </textarea>
      <ConfirmButton onClick={onClick}>팀 지원하기</ConfirmButton>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 17rem;

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

  & > button {
    cursor: pointer;
    margin-top: 5.8rem;
  }
`;
