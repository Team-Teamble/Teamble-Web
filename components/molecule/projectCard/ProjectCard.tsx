import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import { ImgWrapper } from "../../atom/image/ImgWrapper";
import { ProfileImage } from "../../atom/image/ProfileImage";
export interface ProjectCardProps {
  className?: string;
  thumbnail?: string;
  profileImgSrc: string;
  dday: string;

  title: string;
  summary: string;
  userName: { id: number; name: string };
  isClosed: boolean;
  recruitInfo: { id: number; name: string; value: { id: number; count: number } }[];

  onClick(): void;
}

export function ProjectCard(props: ProjectCardProps) {
  const { className, thumbnail, profileImgSrc, dday, title, summary, userName, isClosed, recruitInfo, onClick } = props;
  return (
    <StyledWrapper className={className}>
      <a href="">
        {thumbnail && (
          <ImgWrapper ratio="56%">
            <img src={profileImgSrc} alt="profile" />
            <StyledDay>{dday}</StyledDay>
          </ImgWrapper>
        )}
      </a>
      <StyledLink onClick={onClick}>
        <StyledDesc>
          <h3>{title}</h3>
          <h4>{summary}</h4>
          <StyledProfile>
            <ProfileImage src={profileImgSrc} profileSize="extra-small" onClick={onClick} />
            <span>{userName.name}</span>
          </StyledProfile>
        </StyledDesc>
        <StyledRecruit>
          <span>{isClosed ? "모집완료" : "모집중"}</span>
          <div>
            <span>
              기획자 <span>{recruitInfo[0].value.count}</span>
            </span>
            <span>
              디자이너 <span>{recruitInfo[1].value.count}</span>
            </span>
            <span>
              개발자 <span>{recruitInfo[2].value.count}</span>
            </span>
          </div>
        </StyledRecruit>
      </StyledLink>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  border-radius: 1em;
  width: 38em;
  height: 47em;

  border: 1px solid ${teambleColors.gray};
`;

const StyledDay = styled.div`
  position: absolute;
  top: 1.71em;
  left: 1.79em;

  padding: 0.43em 1em;
  border: 0;
  border-radius: 0.4rem;
  background-color: ${teambleColors.darkGray};

  font-size: 14px;
  font-weight: 500;
  color: ${teambleColors.white};
`;

const StyledLink = styled.div`
  display: flex;
  flex-direction: column;

  margin: 3.1em 1.7em 0 1.7em;

  cursor: pointer;
`;

const StyledDesc = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${teambleColors.darkGray};

  & > h3 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 20px;
    font-weight: 700;
  }

  & > h4 {
    margin: 0;
    margin-bottom: 2rem;
    font-size: 16px;
    font-weight: 500;
    color: ${teambleColors.darkGray};
  }
`;

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.8em;

  & > div {
    margin-right: 0.8rem;
  }

  & > span {
    font-size: 12px;
    color: ${teambleColors.darkGray};
  }
`;

const StyledRecruit = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.9em;

  & > span {
    font-size: 16px;
    font-weight: 700;
    color: ${teambleColors.darkGray};
  }

  & > div {
    display: flex;

    & > span {
      font-size: 16px;
      font-weight: 400;
      color: ${teambleColors.darkGray};
    }

    & > span + span {
      margin-left: 0.56em;
    }
  }
`;
