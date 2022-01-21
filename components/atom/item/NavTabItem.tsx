import React, { forwardRef, ReactNode } from "react";
import styled, { css } from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface NavTabItemProps {
  className?: string;
  children: ReactNode;
  isSelected?: boolean;
  href?: string;
}

export const NavTabItem = forwardRef<HTMLDivElement, NavTabItemProps>(function NavTabItem(props, ref) {
  const { className = "first", children, isSelected, href } = props;

  return (
    <StyledNavTabItem ref={ref} className={className} isSelected={isSelected} href={href}>
      <StyledItemContent isSelected={isSelected}>{children}</StyledItemContent>
    </StyledNavTabItem>
  );
});

const StyledNavTabItem = styled.div<NavTabItemProps>`
  display: flex;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  height: 100%;
`;

const StyledItemContent = styled.div<{
  isSelected?: boolean;
}>`
  border-bottom: 3px solid transparent;
  transition: border-color 0.3s;

  ${(props) => {
    if (props.isSelected) {
      return css`
        border-bottom: 3px solid ${teambleColors.black};

        text-decoration: none;
        font-size: 1.5rem;
        font-weight: 500;
        color: ${teambleColors.black};
      `;
    } else {
      return css`
        border: 0;

        text-decoration: none;
        font-size: 1.5rem;
        font-weight: 500;
        color: ${teambleColors.deepGray};
      `;
    }
  }}

  &:hover {
    color: ${teambleColors.black};
  }
`;
