import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface ProfileTestBtnProps {
  className?: string;
  arrowImgSrc?: string; // 추후 아이콘으로 직접 넣을 예정
  onClick(): void;
}

export function ProfileTestButton(props: ProfileTestBtnProps) {
  const { className, arrowImgSrc, onClick } = props;
  return (
    <StyledEditBtn onClick={onClick} className={className}>
      <img src={arrowImgSrc} alt="edit-icon" />
      <span>협업 성향 테스트 하러가기</span>
    </StyledEditBtn>
  );
}

const StyledEditBtn = styled.button`
  display: flex;
  align-items: center;

  border: 0;
  border-radius: 2.2em;
  padding: 0.5em 1.88em 0.56em 1.81em;
  background-color: ${teambleColors.purple};
  font-size: 16px;
  color: ${teambleColors.white};

  & > img {
    margin-right: 1.19em;
    transform: rotate(-90deg);
  }

  &:hover {
    background-color: ${teambleColors.darkPurple};
  }
`;
