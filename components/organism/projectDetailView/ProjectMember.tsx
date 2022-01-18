import React from "react";
import styled from "styled-components";
import { ProjectDetail } from "../../../api/project";
import { CrewTag } from "../../molecule/crewTag/CrewTag";

export interface ProjectMemberProps {
  className?: string;

  projectDetail: ProjectDetail;
}

export function ProjectMember(props: ProjectMemberProps) {
  const { className, projectDetail } = props;
  return (
    <StyledWrapper className={className}>
      {projectDetail.project.member.map((key) => (
        <CrewTag key={key.id} photo={key.photo} user={key.name} isEditView={false} />
      ))}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  margin-bottom: 31rem;
  & > div + div {
    margin-left: 0.75em;
  }
`;
