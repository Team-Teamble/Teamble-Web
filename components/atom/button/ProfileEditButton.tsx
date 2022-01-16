import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import Edit from "../../../assets/svg/ic_profile_edit.svg";

export interface ProfileEditButtonProps {
  className?: string;
  onEdit(): void;
}

export function ProfileEditButton(props: ProfileEditButtonProps) {
  const { className, onEdit } = props;

  function handleClick() {
    onEdit();
  }

  return (
    <StyledEditBtn onClick={handleClick} className={className}>
      <Edit />
      <span>프로필 수정</span>
    </StyledEditBtn>
  );
}

const StyledEditBtn = styled.button`
  display: flex;
  align-items: center;
  width: 295px;
  height: 41px;
  border: 1px solid #905de3; // 컬러 수정 필요
  border-radius: 2.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${teambleColors.white};
  font-size: 16px;
  cursor: pointer;
  color: #905de3;
  & > img {
    margin-right: 0.55em;
  }

  &:hover {
    background-color: ${teambleColors.lightPurple};
  }
`;
