import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { LandingPageSecond } from "../organism/landing/LandingPageSecond";
import { LandingPageThird } from "../organism/landing/LandingPageThird";
import { LandingPageFourth } from "../organism/landing/LandingPageFourth";
import { LandingPage } from "../organism/landing/LandingPage";

interface LandingTemplateProps {
  header: ReactNode;
}

export default function LandingTemplate(props: LandingTemplateProps) {
  const [scrollIndex, setScrollIndex] = useState(1);

  return (
    <StyledWrapper>
      {props.header}
      <LandingPage />
      <LandingPageSecond />
      <LandingPageThird />
      <LandingPageFourth />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;
