import { ReactNode } from "react";
import styled from "styled-components";

interface LogInTemplateProps {
  header: ReactNode;
  contents: ReactNode;
}

export function LogInTemplate(props: LogInTemplateProps) {
  return (
    <StyledWrapper>
      <StyledHeader>{props.header}</StyledHeader>
      <StyledContent>{props.contents}</StyledContent>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled.div`
  width: 100%;
  margin-bottom: 13.1em;
`;

const StyledContent = styled.div``;
