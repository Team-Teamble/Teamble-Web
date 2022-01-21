import React, { forwardRef, ReactNode } from "react";
import styled from "styled-components";

export interface NavProfileNameProps {
  className?: string;
  children: ReactNode;
}

export const NavProfileName = forwardRef<HTMLAnchorElement, NavProfileNameProps>(function NavProfileName(
  props: NavProfileNameProps,
  ref,
) {
  const { className, children } = props;
  return (
    <StyledProfileName ref={ref} className={className}>
      {children}
    </StyledProfileName>
  );
});

const StyledProfileName = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: #606060;
`;
