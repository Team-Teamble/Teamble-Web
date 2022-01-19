import React, { Children, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import landingPage4 from "../../../assets/svg/landing4.png";

export interface LandingPageProps {
  className?: string;
}

export function LandingPageFourth(props: LandingPageProps) {
  const { className } = props;

  return <StyledWrapper className={className}></StyledWrapper>;
}

const StyledWrapper = styled.div`
  background: url(${landingPage4.src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;
