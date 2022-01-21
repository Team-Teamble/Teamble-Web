import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { NavTabItem } from "../../atom/item/NavTabItem";
import { EntryField } from "../../molecule/entryField/EntryField";
import { ProfileField } from "../../molecule/navProfileField/ProfileField";
import Logo from "../../../assets/svg/logo_img.svg";
import { teambleColors } from "../../../styles/color";
import { ProfileImage } from "../../atom/image/ProfileImage";
import { ProfileDropDown } from "../../molecule/profileDropDown/ProfileDropDown";
export interface HeaderProps {
  className?: string;
  user: { id: number; name: string; profilePic: string; currentProjectId: number | null } | null;
  currentPath?: string;
}

export function Header(props: HeaderProps) {
  const { className, user, currentPath } = props;
  const [isProfileOpened, setIsProfileOpened] = useState<boolean>(false);

  function handleOpen() {
    setIsProfileOpened((state) => !state);
  }

  return (
    <StyledHeader className={className}>
      <StyledWrapper>
        <StyledHeaderDesc>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          {user !== null ? (
            <ProfileField
              isOpened={isProfileOpened}
              userName={user.name}
              profileImage={<ProfileImage profileImgSrc={user.profilePic} profileSize="small" onClick={handleOpen} />}
              profileDropDown={<ProfileDropDown profileImgSrc={user.profilePic} userInfo={user} />}
            />
          ) : (
            <EntryField />
          )}
        </StyledHeaderDesc>

        <StyledNav>
          <Link href="/" passHref>
            <NavTabItem isSelected={currentPath === "/"}>팀블 소개</NavTabItem>
          </Link>
          <Link href="/project" passHref>
            <NavTabItem isSelected={currentPath === "/project"}>프로젝트 찾기</NavTabItem>
          </Link>
          <Link href="/profile" passHref>
            <NavTabItem isSelected={currentPath?.startsWith("/profile")}>팀원 찾기</NavTabItem>
          </Link>
          <Link
            href={user && user.currentProjectId ? `/project/${user.currentProjectId}` : "/create-project"}
            passHref
            scroll={true}>
            <NavTabItem isSelected={currentPath?.startsWith("/create-project") || currentPath?.startsWith("/project/")}>
              {user && user.currentProjectId ? "프로젝트 보기" : "프로젝트팀 만들기"}
            </NavTabItem>
          </Link>
        </StyledNav>
      </StyledWrapper>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  padding-top: 1.5rem;
  display: flex;
  justify-content: center;
  background-color: ${teambleColors.white};
  box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.07);

  zoom: 70%;
`;

const StyledHeaderDesc = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 47.5px;
`;

const StyledNav = styled.nav`
  width: 100%;
  height: 3.6em;
  display: flex;

  & > div + div {
    margin-left: 6.5em;
  }
`;
const StyledWrapper = styled.div`
  width: 120em;
  max-width: 120em;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
