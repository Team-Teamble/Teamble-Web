import Link from "next/link";
import React from "react";
import styled from "styled-components";

import { EntryButton } from "../../atom/button/EntryButton";

export interface EntryFieldProps {
  className?: string;
}

export function EntryField(props: EntryFieldProps) {
  const { className } = props;
  return (
    <StyledWrapper className={className}>
      <Link href="/login" passHref>
        <EntryButton className="login" href="/login">
          로그인
        </EntryButton>
      </Link>
      <Link href="/register" passHref>
        <EntryButton className="register" href="/register">
          회원가입
        </EntryButton>
      </Link>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;

  & > a + a {
    margin-left: 1.6em;
  }
`;
