import React, { ReactNode } from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface EntryButtonProps {
  className?: string;
  children: ReactNode;

  onClick(): void;
}

export function EntryButton(props: EntryButtonProps) {
  const { className, children, onClick } = props;

  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.a`
  cursor: pointer;

  border: 0;
  outline: 0;
  padding-right: 1.6em;
  background-color: transparent;

  color: ${teambleColors.darkGray};
  font-size: 16px;
  font-weight: 500;

  &:hover {
    color: ${teambleColors.darkPurple};
    font-weight: 700;
  }
`;
