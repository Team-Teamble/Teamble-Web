import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import { ProfileImage } from "./../../atom/image/ProfileImage";

export interface CrewTagProps {
  className?: string;
  profileImgSrc: string;
  closeImgSrc: string; // 추후 아이콘으로 직접 추가 예정
  userName: { id: number; userName: string };

  onClick(): void;
}

export function CrewTag(props: CrewTagProps) {
  const { className, userName, profileImgSrc, closeImgSrc, onClick } = props;
  return (
    <StyledWrapper>
      <img src={closeImgSrc} className="close-btn" alt="close-btn" onClick={onClick} />
      <ProfileImage className="profile-img" src={profileImgSrc} profileSize="large" />
      <span>{userName.userName}</span>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;

  width: 7.69em;
  height: 8.81em;
  border: 1px solid ${teambleColors.purple};
  border-radius: 0.63em;
  background-color: ${teambleColors.lightPurple};

  padding: 1.44em 2.06em 1.31em 2.06em;

  & > .profile-img {
    margin-bottom: 1.69em;
  }

  & > .close-btn {
    position: absolute;
    top: 0.63em;
    right: 0.5em;
  }
`;
