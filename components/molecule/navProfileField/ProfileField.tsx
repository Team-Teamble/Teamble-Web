import React from "react";
import styled from "styled-components";
import { AlertImage } from "../../atom/image/AlertImage";
import { ProfileImage } from "../../atom/image/ProfileImage";
import { NavProfileName } from "../../atom/item/NavProfileName";

export interface ProfileFieldProps {
  className?: string;
  profileImgSrc: string;
  userName: string;

  onClick(): void;
}

export function ProfileField(props: ProfileFieldProps) {
  const { className, profileImgSrc, userName, onClick } = props;
  return (
    <StyledWrapper className={className}>
      <AlertImage onClick={onClick} />
      <StyledProfileWrapper>
        <ProfileImage profileImgSrc={profileImgSrc} profileSize="small" onClick={onClick} />
        <NavProfileName onClick={onClick}>{userName}</NavProfileName>
      </StyledProfileWrapper>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 4.4rem;

  & > a {
    padding-top: 0.18rem;
    margin-right: 1.85em;
  }
`;

const StyledProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  & > div {
    padding-right: 1.15em;
  }
`;
