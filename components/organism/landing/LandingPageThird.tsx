import React from "react";
import styled from "styled-components";

export interface LandingPageProps {
  className?: string;
}

export function LandingPageThird(props: LandingPageProps) {
  const { className } = props;

  return (
    <StyledWrapper className={className}>
      <img src="/landing/landing3.svg" alt="landing3" />
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
