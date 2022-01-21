import React, { forwardRef, ReactNode } from "react";
import styled, { css } from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface NavTabItemProps {
  className?: string;
  children: ReactNode;
  isSelected?: boolean;
  href?: string;
}

export const NavTabItem = forwardRef<HTMLAnchorElement, NavTabItemProps>(function NavTabItem(props, ref) {
  const { className = "first", children, isSelected, href } = props;

  return (
    <StyledNavTabItem ref={ref} className={className} isSelected={isSelected} href={href}>
      <StyledItemContent isSelected={isSelected}>{children}</StyledItemContent>
    </StyledNavTabItem>
  );
});

const StyledNavTabItem = styled.a<NavTabItemProps>`
  display: flex;
  justify-content: center;
  cursor: pointer;
  height: 3.6rem;

  text-decoration: none;
`;

const StyledItemContent = styled.div<{
  isSelected?: boolean;
}>`
  ${(props) => {
    if (props.isSelected) {
      return css`
        border-bottom: 3px solid ${teambleColors.black};

        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 500;
        color: ${teambleColors.black};
      `;
    } else {
      return css`
        border: 0;

        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 500;
        color: ${teambleColors.deepGray};
      `;
    }
  }}

  &:hover {
    border-bottom: 3px solid ${teambleColors.black};

    color: ${teambleColors.black};
  }
`;
