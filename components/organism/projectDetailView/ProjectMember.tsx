import React from "react";
import styled from "styled-components";
import { CrewTag } from "../../molecule/crewTag/CrewTag";

export interface ProjectMemberProps {
  className?: string;
  member: // 프로젝트 팀 구성원
  {
    id: number; // 프로젝트 팀 구성원 id
    name: string; // 프로젝트 팀 구성원 이름
    photo: string; // 프로젝트 팀 구성원 사진 url
  }[];
}

export function ProjectMember(props: ProjectMemberProps) {
  const { className, member } = props;
  return (
    <StyledWrapper className={className}>
      {member.map((key) => (
        <CrewTag key={key.id} photo={key.photo} user={key.name} isEditView={false} />
      ))}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;

  & > div + div {
    margin-left: 0.75em;
  }
`;
