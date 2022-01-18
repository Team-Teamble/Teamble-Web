import React from "react";
import styled from "styled-components";

export interface LandingPageProps {
  className?: string;
}
export function LandingPage(props: LandingPageProps) {
  const { className } = props;
  return <StyledWrapper className={className}></StyledWrapper>;
}

const StyledWrapper = styled.div`
  background-color: blueviolet;
  width: 100%;
  height: 100vh;
  border: 1px solid white;
`;
