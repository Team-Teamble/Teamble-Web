import React from "react";
import styled from "styled-components";
import { AlertImage } from "../../atom/image/AlertImage";
import { ProfileImage } from "../../atom/image/ProfileImage";
import { NavProfileName } from "../../atom/item/NavProfileName";

export interface ProfileFieldProps {
  className?: string;
  alerImgSrc: string;
  profileImgSrc: string;
  userName: { id: number; name: string };

  onClick(): void;
}

export function ProfileField(props: ProfileFieldProps) {
  const { className, alerImgSrc, profileImgSrc, userName, onClick } = props;
  return (
    <StyledWrapper className={className}>
      <AlertImage className={className} src={alerImgSrc} onClick={onClick} />
      <StyledProfileWrapper>
        <ProfileImage className={className} src={profileImgSrc} profileSize="small" onClick={onClick} />
        <NavProfileName className={className} onClick={onClick}>
          {userName.name}
        </NavProfileName>
      </StyledProfileWrapper>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 13.1rem;
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
