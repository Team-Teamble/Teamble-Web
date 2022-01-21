import React, { forwardRef, ReactNode } from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface EntryButtonProps {
  className?: string;
  children: ReactNode;
  // href: string;
}

export const EntryButton = forwardRef<HTMLDivElement, EntryButtonProps>(function EntryButton(
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

const StyledButton = styled.div`
  cursor: pointer;

  border: 0;
  outline: 0;
  background-color: transparent;
  text-decoration: none;
  color: ${teambleColors.darkGray};
  font-size: 16px;
  font-weight: 500;

  &:hover {
    color: ${teambleColors.darkPurple};
    font-weight: 700;
  }
`;
