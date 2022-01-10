import React, { ReactNode } from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface EntryButtonProps {
  className?: string;
  children: ReactNode;
}

export function EntryButton(props: EntryButtonProps) {
  const { className, children } = props;

  return <StyledButton className={className}>{children}</StyledButton>;
}

const StyledButton = styled.a`
  cursor: pointer;

  border: 0;
  outline: 0;
  background-color: transparent;

  width: 5.63em;
  height: 1.25em;

  color: ${teambleColors.darkGray};
  font-size: 1em;
  font-weight: 500;

  &:hover {
    color: ${teambleColors.darkPurple};
    font-weight: 700;
  }
`;
