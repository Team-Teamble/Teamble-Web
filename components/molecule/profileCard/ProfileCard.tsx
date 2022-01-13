import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import { ProfileImage } from "../../atom/image/ProfileImage";
import CloseIcon from "../../../assets/svg/ic_close_.svg";

export interface ProfileCardProps {
  className?: string;
  profileImgSrc: string;

  userName: { id: number; name: string };
  userPosition: { id: number; name: string };
  tags: { id: number; name: string }[];
  fields: { id: number; name: string }[];

  isMyPage?: boolean;

  onClick(): void;
}

export function ProfileCard(props: ProfileCardProps) {
  const { className, profileImgSrc, userName, userPosition, tags, fields, isMyPage, onClick } = props;

  return (
    <StyledWrapper className={className}>
      {isMyPage ? <CloseIcon className="close-icon" /> : null}
      <StyledInfo>
        <ProfileImage className={className} profileImgSrc={profileImgSrc} profileSize="extra-large" onClick={onClick} />
        <span className="user-name">{userName.name}</span>
        <span className="user-position">{userPosition.name}</span>
      </StyledInfo>
      <StyledTags>
        {tags.map(({ id, name }) => {
          if (id <= 4) {
            return (
              <>
                <span key={id} onClick={onClick}>
                  {name}
                </span>
                <span>•</span>
              </>
            );
          } else {
            return (
              <>
                <span key={id} onClick={onClick}>
                  {name}
                </span>
              </>
            );
          }
        })}
      </StyledTags>
      <StyledInterests>
        {fields.map(({ id, name }) => (
          <StyledIntrestTag key={id} onClick={onClick}>
            {name}
          </StyledIntrestTag>
        ))}
      </StyledInterests>
      {isMyPage ? <a href="">프로필 보기</a> : null}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  width: 23.31em;
  padding: 7.1em 5.2em 3em 5.2em;
  border-radius: 1em;
  background-color: ${teambleColors.lightPurple};
  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.04);

  & > svg {
    cursor: pointer;
    position: absolute;
    top: 2.8em;
    right: 3.3em;
  }

  & > a {
    margin-top: 2.45em;
    text-decoration: none;
    border-radius: 0.36em;
    background-color: ${teambleColors.purple};
    padding: 0.36em 2.07em;
    font-size: 14px;
    font-weight: 500;
    color: ${teambleColors.white};
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-bottom: 1.8em; */

  & > .user-name {
    font-size: 20px;
    font-weight: 700;
    color: ${teambleColors.black};
    margin-top: 0.4em;
  }

  & > .user-position {
    font-size: 12px;
    font-weight: 500;
    color: ${teambleColors.purple};
    margin-top: 0.5em;
  }
`;

const StyledTags = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2em;
  width: 100%;
  font-size: 12px;
  color: ${teambleColors.darkGray};

  padding-bottom: 1.5em;
  border-bottom: 1px solid ${teambleColors.brightPurple};
  & > span + span {
    margin-left: 0.1rem;
  }
`;

const StyledInterests = styled.div`
  display: flex;
  margin-top: 2.45em;

  & > div + div {
    margin-left: 0.38em;
  }
`;

const StyledIntrestTag = styled.div`
  display: inline-flex;
  border: 1px solid ${teambleColors.deepPurple};
  border-radius: 1.83em;
  font-weight: 500;
  color: ${teambleColors.black};

  padding: 0.58em 1.58em;
`;
