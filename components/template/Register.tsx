import { ReactNode } from "react";
import styled from "styled-components";

interface RegisterTemplateProps {
  contents: ReactNode;
}

export function RegisterTemplate(props: RegisterTemplateProps) {
  return (
    <StyledWrapper>
      <StyledContent>{props.contents}</StyledContent>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledContent = styled.div``;
