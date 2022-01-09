import React from "react";
import styled from "styled-components";
import { AlertImage } from "../../atom/image/AlertImage";
import { ProfileImage } from "../../atom/image/ProfileImage";
import { NavProfileName } from "../../atom/item/NavProfileName";

export interface ProfileFieldProps {
  className?: string;
  alertSrc: string;
  src: string;
  value: string;

  onClick(): void;
}

export function ProfileField(props: ProfileFieldProps) {
  const { className, alertSrc, src, value, onClick } = props;
  return (
    <StyledWrapper className={className}>
      <AlertImage className={className} src={alertSrc} onClick={onClick} />
      <StyledProfileWrapper>
        <ProfileImage className={className} src={src} profileSize="small" onClick={onClick} />
        <NavProfileName className={className} value={value} onClick={onClick} />
      </StyledProfileWrapper>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 7.85em;
  height: 2.32em;

  & > a {
    padding-top: 0.18em;
  }
`;

const StyledProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  & > div {
    padding-right: 0.46em;
  }
`;
