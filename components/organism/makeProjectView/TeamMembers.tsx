import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { CrewTag } from "../../molecule/crewTag/CrewTag";
import { EmailAddButton } from "../../atom/button/EmailAddButton";

interface MemberInfo {
  id: number;
  name: string;
  photo: string;
}

export interface TeamMembersProps {
  myId: number;
  className?: string;
  membersInfo: MemberInfo[];
  addMemberModal: ReactNode;
  onClick(): void;
  onDelete(id: number): void;
}

export function TeamMembers(props: TeamMembersProps) {
  const { myId, onClick: handleOpen, className, membersInfo, addMemberModal, onDelete } = props;

  return (
    <StyledTeamMembers className={className}>
      <StyledTitle>팀 구성원</StyledTitle>
      <MembersWrapper>
        {membersInfo.map(({ id, name, photo }) => (
          <CrewTag key={id} photo={photo} user={name} isEditView={id !== myId} onClick={() => onDelete(id)} />
        ))}
        <EmailAddButton onClick={handleOpen} />
      </MembersWrapper>
      {addMemberModal}
    </StyledTeamMembers>
  );
}

const StyledTeamMembers = styled.div``;

const StyledTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.02em;
`;

const MembersWrapper = styled.div`
  padding-top: 19px;
  display: flex;

  & > div {
    margin-right: 24px;
  }
`;
