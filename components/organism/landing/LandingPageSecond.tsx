import React from "react";
import styled from "styled-components";
import LandingPage2 from "../../../assets/svg/landing2.svg";

export interface LandingPageProps {
  className?: string;
}

export function LandingPageSecond(props: LandingPageProps) {
  const { className } = props;

  return (
    <StyledWrapper className={className}>
      <LandingPage2 />
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
