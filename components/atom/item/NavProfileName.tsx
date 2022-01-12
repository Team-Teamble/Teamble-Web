import React, { ReactNode } from "react";
import styled from "styled-components";

export interface NavProfileNameProps {
  className?: string;
  children: ReactNode;

  onClick(): void;
}

export function NavProfileName(props: NavProfileNameProps) {
  const { className, children = "마가렛", onClick } = props;
  return (
    <StyledProfileName className={className} onClick={onClick}>
      {children}
    </StyledProfileName>
  );
}

const StyledProfileName = styled.a`
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;
  color: #606060;
`;
