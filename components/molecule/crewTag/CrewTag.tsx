import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import { ProfileImage } from "./../../atom/image/ProfileImage";

export interface CrewTagProps {
  className?: string;
  profileImgSrc: string;
  closeImgSrc: string; // 추후 아이콘으로 직접 추가 예정
  userName: { id: number; name: string };

  onClick(): void;
}

export function CrewTag(props: CrewTagProps) {
  const { className, userName, profileImgSrc, closeImgSrc, onClick } = props;
  return (
    <StyledWrapper>
      <img src={closeImgSrc} className="close-btn" alt="close-btn" onClick={onClick} />
      <StyledImgWrapper>
        <img src={profileImgSrc} alt="" />
      </StyledImgWrapper>
      <span>{userName.name}</span>
    </StyledWrapper>
  );
}

export const StyledWrapper = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: ${teambleColors.darkGray};

  width: 7.69em;
  border: 1px solid ${teambleColors.purple};
  border-radius: 0.63em;
  background-color: ${teambleColors.lightPurple};

  padding-top: 1.44em;
  padding-bottom: 1.31em;

  & > span {
    margin-top: 0.8rem;
  }

  & > .close-btn {
    position: absolute;
    top: 0.63em;
    right: 0.5em;
  }
`;

export const StyledImgWrapper = styled.div`
  width: 3.94em;
  height: 3.94em;
  border-radius: 50%;
  overflow: hidden;

  & > img {
    max-width: 100%;
    max-height: 100%;
  }
`;
