import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import { ImgWrapper } from "../../atom/image/ImgWrapper";
import { ProfileImage } from "../../atom/image/ProfileImage";

export interface ProjectHeaderProps {
  className?: string;
  title: string;
  intro: string;
  photo: string;
  user: {
    id: number;
    name: string;
    photo: string;
  };
}

export function ProjectHeader(props: ProjectHeaderProps) {
  const { className, title, intro, photo, user } = props;
  return (
    <StyledWrapper className={className}>
      <StyledLeft>
        <StyledTitleWrapper>
          <StyledTitle>{title}</StyledTitle>
          <StyledIntro>{intro}</StyledIntro>
        </StyledTitleWrapper>

        <StyledUser>
          <ProfileImage profileSize="extra-small" profileImgSrc={user.photo} />
          <span>{user.name}</span>
        </StyledUser>
      </StyledLeft>
      <StyledRight>
        <StyledImg>
          <ImgWrapper ratio="100%">
            <img src={photo} alt="project-photo" />
            {/* <img
              src="https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3"
              alt=""
            /> */}
          </ImgWrapper>
        </StyledImg>
      </StyledRight>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 54.5rem;
`;

const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
`;

const StyledTitle = styled.span`
  font-size: 30px;
  font-weight: 400;
  color: ${teambleColors.deepGray};
  margin-bottom: 4.4rem;
`;

const StyledIntro = styled.span`
  font-size: 40px;
  font-weight: 700;
  color: ${teambleColors.darkGray};
`;

const StyledUser = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  color: ${teambleColors.deepGray};
`;

const StyledImg = styled.div`
  width: 51.3rem;
  height: 51.3rem;
  overflow: hidden;
`;
