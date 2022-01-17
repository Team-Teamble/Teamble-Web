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
    <StyledWrapper>
      <StyledHeader>{props.header}</StyledHeader>
      <StyledSummary>{props.summary}</StyledSummary>
      <StyledDesc>{props.desc}</StyledDesc>
      <StyledMember>{props.member}</StyledMember>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 22rem;
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

const StyledMember = styled.div`
  width: 100%;
`;
