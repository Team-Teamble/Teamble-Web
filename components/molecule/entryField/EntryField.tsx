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
    <StyledWrapper>
      <EntryButton className="login" value="로그인" onClick={onClick} />
      <EntryButton className="register" value="회원가입" onClick={onClick} />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
`;
