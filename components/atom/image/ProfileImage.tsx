import React from "react";
import styled, { css } from "styled-components";

export interface ProfileProps {
  className?: string;
  src: string;
  profileSize?: "extra-small" | "small" | "medium" | "large" | "extra-large" | "extra-extra-large";
  onClick(): void;
}

export function ProfileImage(props: ProfileProps) {
  const { className, src, profileSize = "medium", onClick } = props;

  return (
    <StyledImgWrapper>
      <StyledProfileImg src={src} profileSize={profileSize} onClick={onClick} />
    </StyledImgWrapper>
  );
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
        width: 1.56em;
        height: 1.56em;
      `;
    } else if (props.profileSize === "small") {
      return css`
        width: 2.04em;
        height: 2.04em;
      `;
    } else if (props.profileSize === "medium") {
      return css`
        width: 2.25em;
        height: 2.25em;
      `;
    } else if (props.profileSize === "large") {
      return css`
        width: 3.94em;
        height: 3.94em;
      `;
    } else if (props.profileSize === "extra-large") {
      return css`
        width: 6.07em;
        height: 6.07em;
      `;
    } else if (props.profileSize === "extra-extra-large") {
      return css`
        width: 7.81em;
        height: 7.76em;
      `;
    }
  }}
`;
