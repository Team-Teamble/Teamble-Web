import React, { Children, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import landingPage1 from "../../../assets/svg/landing1.png";

export interface LandingPageProps {
  className?: string;
}

export function LandingPage(props: LandingPageProps) {
  const { className } = props;

  return <StyledWrapper className={className}></StyledWrapper>;
}

const StyledWrapper = styled.div`
  background: url(${landingPage1.src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;
