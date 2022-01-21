import { useEffect, useRef } from "react";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import { ProfileImage } from "../../atom/image/ProfileImage";
import { useLogout } from "../../../utils/hook/auth";
import ArrowRight from "../../../assets/svg/ic_arrow_right.svg";

export interface ProfileDropDownProps {
  className?: string;
  profileImgSrc: string;
  userInfo: { id: number; name: string };
  onClose?(): void;
}
export function ProfileDropDown(props: ProfileDropDownProps) {
  const { className, profileImgSrc, userInfo, onClose } = props;
  const logOut = useLogout({ redirect: "/" });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOuterClick(e: MouseEvent) {
      if (!open) {
        return;
      }
      if (e.target instanceof Element) {
        if (!ref.current?.contains(e.target)) {
          console.log("contains?");
          onClose && onClose();
        }
      }
    }

    document.addEventListener("click", onOuterClick);

    return () => {
      document.removeEventListener("click", onOuterClick);
    };
  }, [onClose]);

  return (
    <StyledWrapper className={className} ref={ref}>
      <StyledProfileWrapper>
        <ProfileImage profileImgSrc={profileImgSrc} profileSize="small" />
        <StyledInfoWrapper>
          <span>{userInfo.name}</span>
          <div>
            <Link href={`/profile/${userInfo.id}`}>
              <a onClick={onClose}>프로필 설정</a>
            </Link>
            <StyledArrow />
          </div>
        </StyledInfoWrapper>
      </StyledProfileWrapper>
      <StyledMenuWrapper>
        <Link href={`/poke/${userInfo.id}`}>
          <a onClick={onClose}>마이페이지</a>
        </Link>
        <span
          onClick={() => {
            logOut();
            onClose && onClose();
          }}>
          로그아웃
        </span>
      </StyledMenuWrapper>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: absolute;
  top: calc(100% + 1.5em);
  right: 0;
  display: inline-flex;
  flex-direction: column;
  border-radius: 0.6em;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.18);
  padding: 2.3em 2.2em 3.5em 2.2em;
  box-sizing: border-box;
  background-color: ${teambleColors.white};
  a {
    text-decoration: none;
  }
`;

const StyledProfileWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${teambleColors.deepGray};
  padding: 0 0.8em 1.4em 0.55em;
  margin-bottom: 1.7em;
  box-sizing: border-box;
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.55rem;
  width: 100%;
  max-width: 13em;
  min-width: 10em;
  height: 30px;
  justify-content: space-between;
  font-weight: 500;
  box-sizing: border-box;
  & > span {
    display: block;
    width: 100%;
    font-size: 14px;
    color: ${teambleColors.darkGray};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > div {
    display: flex;
    align-items: center;
  }
  & > div > a {
    display: flex;
    font-size: 12px;

    color: ${teambleColors.purple};
  }
`;

const StyledMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > a {
    font-size: 16px;
    color: ${teambleColors.deepGray};
    cursor: pointer;
  }

  & > a + span {
    font-size: 16px;
    color: ${teambleColors.deepGray};
    margin-top: 0.94em;
    cursor: pointer;
  }

  & > a:hover,
  span:hover {
    color: ${teambleColors.purple};
  }
`;
const StyledArrow = styled(ArrowRight)`
  width: 8px;
  padding-top: 0.15em;
  padding-left: 0.3rem;
`;
