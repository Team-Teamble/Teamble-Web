import React from "react";
import styled from "styled-components";
import landingPage2 from "../../../assets/svg/landing2.png";

export interface LandingPageProps {
  className?: string;
}

export function LandingPageSecond(props: LandingPageProps) {
  const { className } = props;

  return <StyledWrapper className={className}></StyledWrapper>;
}

const StyledWrapper = styled.div`
  background: url(${landingPage2.src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;
