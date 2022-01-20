import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import CloseIcon from "../../../assets/svg/ic_close_.svg";
import { ProfileImage } from "../../atom/image/ProfileImage";

export interface CrewTagProps {
  className?: string;
  photo: string | undefined;
  user: string;
  isEditView?: boolean;
  onClick?(): void;
}

export function CrewTag(props: CrewTagProps) {
  const { className, user, photo, isEditView, onClick } = props;

  return (
    <StyledWrapper className={className}>
      {isEditView ? <CloseIcon onClick={onClick} /> : null}
      <StyledImgWrapper>
        <ProfileImage profileImgSrc={photo} profileSize="large" />
      </StyledImgWrapper>
      <span>{user}</span>
    </StyledWrapper>
  );
}

export const StyledWrapper = styled.div`
  width: 129px;
  height: 141px;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: ${teambleColors.darkGray};
  border-radius: 0.63em;
  border: 1px solid ${teambleColors.purple};
  background-color: ${teambleColors.lightPurple};
  box-sizing: border-box;

  padding-top: 1.44em;
  padding-bottom: 1.31em;

  & > span {
    margin-top: 0.8rem;
  }

  & > svg {
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
