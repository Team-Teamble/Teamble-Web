import React, { ReactNode } from "react";
import styled from "styled-components";
interface ProjectTemplateProps {
  header: ReactNode;
  summary: ReactNode;
  desc: ReactNode;
  member: ReactNode;
}
export function ProjectDetailTemplate(props: ProjectTemplateProps) {
  return (
    <StyledLayout>
      <StyledWrapper>
        <StyledHeader>{props.header}</StyledHeader>
        <StyledSummary>{props.summary}</StyledSummary>
        <StyledDesc>{props.desc}</StyledDesc>
      </StyledWrapper>
    </StyledLayout>
  );
}
const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  padding-bottom: 70em;
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  box-sizing: border-box;
`;

const StyledHeader = styled.header`
  width: 100%;
`;

const StyledSummary = styled.div`
  width: 100%;
`;

const StyledDesc = styled.div`
  width: 100%;
`;
