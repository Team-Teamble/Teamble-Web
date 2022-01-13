import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import { ProfileImage } from "../../atom/image/ProfileImage";

export interface ProfileDropDownProps {
  className?: string;
  profileImgSrc: string;
  arrowImgSrc: string; // 추후 아이콘으로 직접 추가 예정
  userName: { id: number; userName: string };

  profileLink?: string;
  mypageLink?: string;
  logoutLink?: string;

  onClick(): void;
}
export function ProfileDropDown(props: ProfileDropDownProps) {
  const { className, profileImgSrc, arrowImgSrc, userName, profileLink, mypageLink, logoutLink, onClick } = props;
  return (
    <StyledWrapper className={className}>
      <StyledProfileWrapper>
        <ProfileImage profileImgSrc={profileImgSrc} profileSize="small" onClick={onClick} />
        <StyledInfoWrapper>
          <span>{userName.userName}</span>
          <a href={profileLink} onClick={onClick}>
            프로필 설정
            <img src={arrowImgSrc} alt="arrow-icon" />
          </a>
        </StyledInfoWrapper>
      </StyledProfileWrapper>
      <StyledMenuWrapper>
        <a href={mypageLink}>마이페이지</a>
        <a href={logoutLink}>로그아웃</a>
      </StyledMenuWrapper>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  border-radius: 0.6em;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.18);

  padding: 2.3em 2.2em 3.5em 2.2em;
`;

const StyledProfileWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${teambleColors.deepGray};
  padding: 0 0.8em 1.4em 0.55em;
  margin-bottom: 1.7em;
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.55rem;
  width: 100%;
  height: 100%;

  font-weight: 500;

  & > span {
    font-size: 14px;
    color: ${teambleColors.darkGray};
  }

  & > a {
    display: flex;
    font-size: 12px;
    color: ${teambleColors.purple};

    & > img {
      padding-top: 0.18em;
      padding-left: 0.625rem;
    }
  }
`;

const StyledMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > a {
    font-size: 16px;
    color: ${teambleColors.deepGray};
  }

  & > a + a {
    margin-top: 0.94em;
  }
`;
