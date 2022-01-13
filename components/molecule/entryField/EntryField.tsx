import React from "react";
import styled from "styled-components";

import { EntryButton } from "../../atom/button/EntryButton";

export interface EntryFieldProps {
  className?: string;

  onClick(): void;
}

export function EntryField(props: EntryFieldProps) {
  const { className, onClick } = props;
  return (
    <StyledWrapper className={className}>
      <EntryButton className="login" onClick={onClick}>
        로그인
      </EntryButton>
      <EntryButton className="register" onClick={onClick}>
        회원가입
      </EntryButton>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
`;
