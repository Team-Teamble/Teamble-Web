import React from "react";
import styled from "styled-components";
import { NavTabItem } from "../../atom/item/NavTabItem";
import { EntryField } from "../../molecule/entryField/EntryField";
import { ProfileField } from "../../molecule/navProfileField/ProfileField";
import Logo from "../../../assets/svg/logo_img.svg";

export interface HeaderProps {
  className?: string;
  user: { id: number; name: string; photo: string; projectId: number | null };
  isLogin: boolean;
  isSelected: boolean;
  onClick(): void;
}

export function Header(props: HeaderProps) {
  const { className, user, isLogin, isSelected, onClick } = props;

  return (
    <StyledHeader className={className}>
      <StyledHeaderDesc>
        <Logo />
        {isLogin ? (
          <ProfileField className={className} userName={user.name} profileImgSrc={user.photo} onClick={onClick} />
        ) : (
          <EntryField className={className} onClick={onClick} />
        )}
      </StyledHeaderDesc>

      <StyledNav>
        <NavTabItem className={className} isSelected={isSelected} onClick={onClick}>
          팀블 소개
        </NavTabItem>
        <NavTabItem className={className} isSelected={isSelected} onClick={onClick}>
          프로젝트 찾기
        </NavTabItem>
        <NavTabItem className={className} isSelected={isSelected} onClick={onClick}>
          팀원 찾기
        </NavTabItem>
        <NavTabItem className={className} isSelected={isSelected} onClick={onClick}>
          {user.projectId ? "프로젝트 보기" : "프로젝트팀 만들기"}
        </NavTabItem>
      </StyledNav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 3.3em 34.5em 0 34.5em;
  box-shadow: 0px 4px 8px 2px #00000012;
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
