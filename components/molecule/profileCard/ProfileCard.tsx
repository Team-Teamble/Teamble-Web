import React, { forwardRef } from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import { ProfileImage } from "../../atom/image/ProfileImage";
import CloseIcon from "../../../assets/svg/ic_close_.svg";
import Link from "next/link";

interface ProfileCard {
  id: number;
  name: string;
  photo: string;
  position: string[];
  type: string;
  tag: string[];
  field: string[];
}

export interface ProfileCardProps {
  className?: string;
  cardInfo: ProfileCard;
  isMyPage?: boolean;
  onDelete?(): void;
}

export const ProfileCard = forwardRef<HTMLDivElement, ProfileCardProps>(function ProfileCard(props, ref) {
  const { className, cardInfo, isMyPage, onDelete } = props;

  return (
    <StyledWrapper ref={ref} className={className}>
      {isMyPage ? <CloseIcon className="close-icon" onClick={onDelete} /> : null}
      <StyledInfo>
        <ProfileImage profileImgSrc={cardInfo.photo} profileSize="extra-extra-large" />
        <span className="user-name">{cardInfo.name}</span>
        <span className="user-position">{cardInfo.position.join(" • ")}</span>
      </StyledInfo>
      <StyledTags>{cardInfo.tag.join(" • ")}</StyledTags>
      <StyledInterests>
        {cardInfo.field.map((name, i) => (
          <StyledIntrestTag key={i}>{name}</StyledIntrestTag>
        ))}
      </StyledInterests>
      <Link href={`/profile/${cardInfo.id}`}>{!isMyPage ? <button>프로필 보기</button> : null}</Link>
    </StyledWrapper>
  );
});

const StyledWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-decoration: none;
  outline: none;

  width: 380px;
  height: 446px;
  margin-bottom: 75px;
  box-sizing: border-box;
  padding: 7.1em 5.2em 0em 5.2em;
  border-radius: 1em;
  background-color: ${teambleColors.lightPurple};
  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.04);

  & > svg {
    cursor: pointer;
    position: absolute;
    top: 2.8em;
    right: 3.3em;
  }

  & > button {
    cursor: pointer;
    border: 0;
    outline: none;
    margin-top: 2em;
    text-decoration: none;
    border-radius: 0.36em;
    background-color: ${teambleColors.purple};
    padding: 0.8rem 3.6rem;
    font-size: 14px;
    font-weight: 500;
    color: ${teambleColors.white};
  }
`;

const StyledInfo = styled.div`
  display: flex;
  width: 110px;
  height: 170px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

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
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  color: ${teambleColors.darkGray};
  padding-bottom: 18px;
  border-bottom: 1px solid ${teambleColors.brightPurple};
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
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 31px;
  border: 1px solid ${teambleColors.deepPurple};
  border-radius: 1.83em;
  font-size: 12px;
  font-weight: 500;
  color: ${teambleColors.black};
  box-sizing: border-box;
`;
