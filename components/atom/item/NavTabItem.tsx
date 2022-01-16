import React, { forwardRef, ReactNode } from "react";
import styled, { css } from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface NavTabItemProps {
  className?: string;
  children: ReactNode;
  isSelected?: boolean;
  href?: string;
  onClick(): void;
}

export const NavTabItem = forwardRef<HTMLDivElement, NavTabItemProps>(function NavTabItem(props, ref) {
  const { className = "first", children, isSelected, href, onClick } = props;

  return (
    <StyledNavTabItem ref={ref} className={className} isSelected={isSelected} onClick={onClick}>
      <StyledItemContent isSelected={isSelected}>
        <a href={href} onClick={onClick}>
          {children}
        </a>
      </StyledItemContent>
    </StyledNavTabItem>
  );
});

const StyledNavTabItem = styled.div<NavTabItemProps>`
  display: flex;
  justify-content: center;
  cursor: pointer;
  height: 3.6em;
`;

const StyledItemContent = styled.div<{
  isSelected?: boolean;
}>`
  ${(props) => {
    if (props.isSelected) {
      return css`
        border-bottom: 3px solid ${teambleColors.black};

        & > a {
          text-decoration: none;
          font-size: 18px;
          font-weight: 500;
          color: ${teambleColors.black};
        }
      `;
    } else {
      return css`
        border: 0;

        & > a {
          text-decoration: none;
          font-size: 18px;
          font-weight: 500;
          color: ${teambleColors.deepGray};
        }
      `;
    }
  }}

  &:hover {
    border-bottom: 3px solid ${teambleColors.black};

    & > a {
      color: ${teambleColors.black};
    }
  }
`;
