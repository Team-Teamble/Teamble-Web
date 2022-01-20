import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

import DefaultProfile from "../../../assets/svg/ic_profile.svg";

export interface ProfileProps {
  className?: string;
  profileImgSrc: string | undefined;
  profileSize?: "extra-small" | "small" | "medium" | "large" | "extra-large" | "extra-extra-large";
  onClick?(): void;
}

export const ProfileImage = forwardRef<HTMLImageElement, ProfileProps>(function ProfileImage(props: ProfileProps, ref) {
  const { className, profileImgSrc, profileSize = "medium", onClick } = props;

  function checkDefaultProfile(profileImgSrc: string | undefined) {
    if (profileImgSrc === "" || profileImgSrc === undefined) {
      return <StyledDefault />;
    } else {
      return <StyledProfileImg src={profileImgSrc} profileSize={profileSize} onClick={onClick} />;
    }
  }
  return (
    <StyledImgWrapper ref={ref} className={className}>
      {checkDefaultProfile(profileImgSrc)}
    </StyledImgWrapper>
  );
});

const StyledImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledProfileImg = styled.img<{
  profileSize: string;
}>`
  border-radius: 50%;

  ${(props) => {
    if (props.profileSize === "extra-small") {
      return css`
        width: 2.5em;
        height: 2.5em;
      `;
    } else if (props.profileSize === "small") {
      return css`
        width: 3.3em;
        height: 3.3em;
      `;
    } else if (props.profileSize === "medium") {
      return css`
        width: 3.6em;
        height: 3.6em;
      `;
    } else if (props.profileSize === "large") {
      return css`
        width: 6.3em;
        height: 6.3em;
      `;
    } else if (props.profileSize === "extra-large") {
      return css`
        width: 9.076em;
        height: 9.076em;
      `;
    } else if (props.profileSize === "extra-extra-large") {
      return css`
        width: 110px;
        height: 110px;
      `;
    }
  }}
`;
const StyledDefault = styled(DefaultProfile)``;
