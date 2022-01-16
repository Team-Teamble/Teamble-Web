import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { NavTabItem } from "../../atom/item/NavTabItem";
import { EntryField } from "../../molecule/entryField/EntryField";
import { ProfileField } from "../../molecule/navProfileField/ProfileField";
import Logo from "../../../assets/svg/logo_img.svg";

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
    <StyledWrapper>
      <StyledHeader className={className}>
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
      </StyledHeader>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0px 4px 8px 2px #00000012;
`;

const StyledHeader = styled.div`
  margin: 0 21.56rem;
`;

const StyledHeaderDesc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNav = styled.nav`
  margin-left: 3em;
  display: flex;

  & > div + div {
    margin-left: 6.5em;
  }
`;
