import React from "react";
import styled from "styled-components";

export interface LandingPageProps {
  className?: string;
}

export function LandingPageFourth(props: LandingPageProps) {
  const { className } = props;

  return (
    <StyledWrapper className={className}>
      <img src="/landing/landing4.svg" alt="landing4" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
