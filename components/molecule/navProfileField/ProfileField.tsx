import React, { ReactNode } from "react";
import styled from "styled-components";
import { AlertLink } from "../../atom/image/AlertImage";
import { NavProfileName } from "../../atom/item/NavProfileName";
import AlertOn from "../../../assets/svg/ic_bell_on.svg";
import AlertOff from "../../../assets/svg/ic_bell_off.svg";
import Link from "next/link";
import { useUser } from "../../../utils/hook/user";

export interface ProfileFieldProps {
  className?: string;
  userName: string;
  profileImage: ReactNode;
  profileDropDown: ReactNode;
  isOpened: boolean;
}

export function ProfileField(props: ProfileFieldProps) {
  const { className, userName, profileImage, profileDropDown, isOpened } = props;

  const csrUser = useUser();

  return (
    <StyledWrapper className={className}>
      <Link href={`/poke/${csrUser?.id}`} passHref>
        <AlertLink>{csrUser?.isAlarmAvailable ? <AlertOn /> : <AlertOff />}</AlertLink>
      </Link>
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
