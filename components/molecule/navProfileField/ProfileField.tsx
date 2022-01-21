import React, { ReactNode } from "react";
import styled from "styled-components";
import { AlertImage } from "../../atom/image/AlertImage";
import { NavProfileName } from "../../atom/item/NavProfileName";

export interface ProfileFieldProps {
  className?: string;
  userName: string;
  profileImage: ReactNode;
  profileDropDown: ReactNode;
  isOpened: boolean;
}

export function ProfileField(props: ProfileFieldProps) {
  const { className, userName, profileImage, profileDropDown, isOpened } = props;

  return (
    <StyledWrapper className={className}>
      <AlertImage />
      <StyledProfileWrapper>
        {profileImage}
        <NavProfileName>{userName}</NavProfileName>
        {isOpened && profileDropDown}
      </StyledProfileWrapper>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  position: relative;

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
