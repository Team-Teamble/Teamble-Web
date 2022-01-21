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
        <a>
          <EntryButton className="login">로그인</EntryButton>
        </a>
      </Link>
      <Link href="/register" passHref>
        <a>
          <EntryButton className="register">회원가입</EntryButton>
        </a>
      </Link>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;

  & > a {
    text-decoration: none;
  }
  & > a + a {
    margin-left: 1.6em;
  }
`;
