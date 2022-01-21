import React, { Children, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import LandingPage4 from "../../../assets/svg/landing4.svg";

export interface LandingPageProps {
  className?: string;
}

export function LandingPageFourth(props: LandingPageProps) {
  const { className } = props;

  return (
    <StyledWrapper className={className}>
      <LandingPage4 />
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
