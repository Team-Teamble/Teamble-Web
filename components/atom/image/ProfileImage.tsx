import React from "react";
import styled, { css } from "styled-components";

import DefaultPrfile from "../../../assets/svg/ic_profile.svg";

export interface ProfileProps {
  className?: string;
  src: string;
  profileSize?: "extra-small" | "small" | "medium" | "large" | "extra-large" | "extra-extra-large";
  onClick?(): void;
}

export function ProfileImage(props: ProfileProps) {
  const { className, src, profileSize = "medium", onClick } = props;

  function checkDefaultProfile(src: string) {
    if (src === "") {
      return <DefaultPrfile />;
    } else {
      return <StyledProfileImg src={src} profileSize={profileSize} onClick={onClick} />;
    }
  }
  return <StyledImgWrapper className={className}>{checkDefaultProfile(src)}</StyledImgWrapper>;
}

const StyledImgWrapper = styled.div`
  display: flex;
  align-items: center;
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
        width: 12.052em;
        height: 12.424em;
      `;
    }
  }}
`;
