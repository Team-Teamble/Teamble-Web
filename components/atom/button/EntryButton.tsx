import React, { forwardRef, ReactNode } from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface EntryButtonProps {
  className?: string;
  children: ReactNode;
}

export const EntryButton = forwardRef<HTMLAnchorElement, EntryButtonProps>(function EntryButton(
  props: EntryButtonProps,
  ref,
) {
  const { className, children } = props;

  return (
    <StyledButton ref={ref} className={className}>
      {children}
    </StyledButton>
  );
});

const StyledButton = styled.a`
  cursor: pointer;

  border: 0;
  outline: 0;
  background-color: transparent;

  color: ${teambleColors.darkGray};
  font-size: 16px;
  font-weight: 500;

  &:hover {
    color: ${teambleColors.darkPurple};
    font-weight: 700;
  }
`;
