import React, { useState } from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import { ImgWrapper } from "../../atom/image/ImgWrapper";
import { ProfileImage } from "../../atom/image/ProfileImage";

interface ProjectCardLanding {
  topProject: [
    {
      id: number; // 프로젝트 id
      title: string; // 프로젝트 제목
      intro: string; // 프로젝트 한줄 소개
      photo: string; // 프로젝트 사진 url
      startDate: string; // 프로젝트 모집 시작 날짜
      endDate: string; // 프로젝트 모집 마감 날짜
      isClosed: boolean; // 프로젝트 모집 완료 여부
      position: {
        id: number; // 포지션 id
        name: string; // 포지션 이름
        num: number; // 모집 인원
      }[];
      user: {
        id: number; // 프로젝트 작성자 id
        name: string; // 프로젝트 작성자 이름
        photo: string; // 프로젝트 작성자 프로필 사진 url
      };
    },
  ];
}
export interface ProjectCardLandingProps {
  cardInfo: ProjectCardLanding;
  className?: string;
}

export function ProjectCardLanding(props: ProjectCardLandingProps) {
  const { className, cardInfo } = props;

  const cardData = cardInfo.topProject[0];
  return (
    <StyledWrapper className={className}>
      <a href="">
        {cardData.photo && (
          <ImgWrapper ratio="56%">
            <img src={cardData.photo} alt="profile" />
            <StyledDay>d-day</StyledDay>
          </ImgWrapper>
        )}
      </a>
      <StyledLink>
        <StyledDesc>
          <h3>{cardData.title}</h3>
          <h4>{cardData.intro}</h4>
          <StyledProfile>
            <ProfileImage profileImgSrc={cardData.user.photo} profileSize="extra-small" />
            <span>{cardData.user.name}</span>
          </StyledProfile>
        </StyledDesc>
        <StyledRecruit>
          <span>{cardData.isClosed ? "모집완료" : "모집중"}</span>
          <div>
            <span>
              기획자 <span>{cardData.position[0].num}</span>
            </span>
            <span>
              디자이너 <span>{cardData.position[1].num}</span>
            </span>
            <span>
              개발자 <span>{cardData.position[2].num}</span>
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
  width: 27em;
  height: 31em;
  border: 1px solid ${teambleColors.gray};
  box-shadow: 4px 4px 7px 0px #0000000a;
  background-color: ${teambleColors.white};
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
