import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { NavTabItem } from "../../atom/item/NavTabItem";
import { EntryField } from "../../molecule/entryField/EntryField";
import { ProfileField } from "../../molecule/navProfileField/ProfileField";
import Logo from "../../../assets/svg/logo_img.svg";
import { teambleColors } from "../../../styles/color";

export interface HeaderProps {
  className?: string;
  user?: { id: number; name: string; photo: string; projectId: number | null };
  isLogin: boolean;
  isSelected?: boolean;
}

export function Header(props: HeaderProps) {
  const { className, user, isLogin, isSelected } = props;

  function handleClick() {
    //
  }

  return (
    <StyledHeader className={className}>
      <StyledWrapper>
        <StyledHeaderDesc>
          <Link href="/" passHref>
            <Logo />
          </Link>
          {isLogin ? (
            user && (
              <ProfileField
                className={className}
                userName={user.name}
                profileImgSrc={user.photo}
                onClick={handleClick}
              />
            )
          ) : (
            <EntryField className={className} onClick={handleClick} />
          )}
        </StyledHeaderDesc>

        <StyledNav>
          <Link href="/about" passHref>
            <NavTabItem className={className} isSelected={isSelected} onClick={handleClick}>
              팀블 소개
            </NavTabItem>
          </Link>
          <Link href="/search" passHref>
            <NavTabItem className={className} isSelected={isSelected} onClick={handleClick}>
              프로젝트 찾기
            </NavTabItem>
          </Link>
          <Link href="/member" passHref>
            <NavTabItem className={className} isSelected={isSelected} onClick={handleClick}>
              팀원 찾기
            </NavTabItem>
          </Link>
          <Link href="/project" passHref>
            <NavTabItem className={className} isSelected={isSelected} onClick={handleClick}>
              {isLogin && user && user.projectId ? "프로젝트 보기" : "프로젝트팀 만들기"}
            </NavTabItem>
          </Link>
        </StyledNav>
      </StyledWrapper>
    </StyledHeader>
    // </StyledWrapper>
  );
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${teambleColors.white};
  box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.07);
`;

const StyledHeaderDesc = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNav = styled.nav`
  width: 100%;
  height: 3.6em;
  margin-left: 3em;
  padding-top: 1.35em;
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
