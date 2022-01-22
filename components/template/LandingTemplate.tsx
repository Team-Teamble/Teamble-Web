import React, { ReactNode } from "react";
import styled from "styled-components";
import { LandingPage } from "../organism/landing/LandingPage";

interface LandingTemplateProps {
  header: ReactNode;
}

export default function LandingTemplate(props: LandingTemplateProps) {
  return (
    <StyledWrapper>
      {props.header}
      <LandingPage />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;
