import React from "react";
import styled from "styled-components";
import LandingPage3 from "../../../assets/svg/landing3.svg";

export interface LandingPageProps {
  className?: string;
}

export function LandingPageThird(props: LandingPageProps) {
  const { className } = props;

  return (
    <StyledWrapper className={className}>
      <LandingPage3 />
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
