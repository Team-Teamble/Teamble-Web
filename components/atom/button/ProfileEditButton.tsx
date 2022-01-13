import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface ProfileEditButtonProps {
  className?: string;
  editImgSrc?: string; // 추후 아이콘으로 직접 넣을 예정
  onClick(): void;
}

export function ProfileEditButton(props: ProfileEditButtonProps) {
  const { className, editImgSrc, onClick } = props;
  return (
    <StyledEditBtn onClick={onClick} className={className}>
      <img src={editImgSrc} alt="edit-icon" />
      <span>프로필 수정</span>
    </StyledEditBtn>
  );
}

const StyledEditBtn = styled.button`
  display: flex;
  align-items: center;

  border: 1px solid #905de3; // 컬러 수정 필요
  border-radius: 2.2em;
  padding: 0.9em 9.7em 0.8em 9.6em;
  background-color: ${teambleColors.white};
  font-size: 16px;
  color: #905de3;
  & > img {
    margin-right: 0.55em;
  }

  &:hover {
    background-color: ${teambleColors.lightPurple};
  }
`;
