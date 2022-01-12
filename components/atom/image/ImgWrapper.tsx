import React, { ReactNode } from "react";
import styled from "styled-components";

export interface ImgWrapperProps {
  ratio: string;
  children: ReactNode;
}

export function ImgWrapper(props: ImgWrapperProps) {
  const { ratio, children } = props;
  return <StyledImgWrapper ratio={ratio}>{children}</StyledImgWrapper>;
}

const StyledImgWrapper = styled.div<{
  ratio: string;
}>`
  padding-top: ${({ ratio }) => ratio};
  position: relative;

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
  }
`;
