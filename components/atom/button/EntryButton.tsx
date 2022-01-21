import React, { forwardRef, ReactNode } from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface EntryButtonProps {
  className?: string;
  children: ReactNode;
  href: string;
}

export const EntryButton = forwardRef<HTMLAnchorElement, EntryButtonProps>(function EntryButton(
  props: EntryButtonProps,
  ref,
) {
  const { className, children, href } = props;

  return (
    <StyledButton ref={ref} className={className} href={href}>
      {children}
    </StyledButton>
  );
});

const StyledButton = styled.a`
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
