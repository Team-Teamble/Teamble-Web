import React, { useState } from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import { ProfileBox } from "../../organism/myPageView/ProfileBox";
import { Tendencies } from "../../molecule/myPageView/Tendencies";
import { UserProfileInfo, UserProfileMeta, HandleUpdate } from "../../../pages/profile/[userId]";
export interface MyPageMainProps {
  className?: string;
  user: UserProfileInfo;
  meta: UserProfileMeta;
  isEditing: boolean;
  selectedTypeId: number | null;
  onUpdate: HandleUpdate;
  onEdit(): void;
  onSelectedType(selectedId: number): void;
}

export function MyPageMain(props: MyPageMainProps) {
  const { user, meta, isEditing, onEdit, onUpdate, onSelectedType, selectedTypeId, className } = props;

  return (
    <StyledMyPageMain className={className}>
      <ProfileBox user={user} meta={meta} isEditing={isEditing} onClick={onEdit} onUpdate={onUpdate} />
      <StyledBody>
        <StyledIntro>
          {!isEditing && <span>&quot;</span>}
          {isEditing ? (
            <StyledIntroInput value={user.description} onChange={(e) => onUpdate("description", e.target.value)} />
          ) : (
            <div>{user.description}</div>
          )}
          {!isEditing && <span>&quot;</span>}
        </StyledIntro>
        <StyledBodySection>
          <Tendencies
            user={user}
            metaType={meta.type}
            tag={user.tag}
            isEditing={isEditing}
            onChange={onSelectedType}
            selectedTypeId={selectedTypeId}
          />
        </StyledBodySection>
      </StyledBody>
    </StyledMyPageMain>
  );
}

const StyledMyPageMain = styled.div`
  display: flex;
  position: relative;
  top: -6.375rem;
`;
const StyledBody = styled.div`
  width: 867px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-left: 11px;
`;
const StyledIntro = styled.div`
  width: 100%;
  display: flex;
  height: 6.375rem;
  font-weight: bold;
  font-size: 35px;
  letter-spacing: -0.02em;
  box-sizing: border-box;
  padding-left: 27px;
  color: ${teambleColors.white};

  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
const StyledIntroInput = styled.input`
  width: 100%;
  height: 52px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${teambleColors.white};
  padding-bottom: 5px;
  outline: none;
  color: ${teambleColors.white};

  &::placeholder {
    color: ${teambleColors.white};
  }
`;

const StyledBodySection = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 1168px;
  padding: 67px 63px 0 61px;
  background: ${teambleColors.white};
  box-shadow: 3px 4px 8px 6px rgba(0, 0, 0, 0.03);
`;
