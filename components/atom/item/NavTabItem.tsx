import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface NavTabItemProps {
  className?: string;
  children: ReactNode;
  selected: boolean;
  onClick(): void;
}

export function NavTabItem(props: NavTabItemProps) {
  const { className = "first", children, selected, onClick } = props;

  return (
    <StyledNavTabItem className={className} selected={selected} onClick={onClick}>
      <StyledItemContent selected={selected}>
        <span>{children}</span>
      </StyledItemContent>
    </StyledNavTabItem>
  );
}

const StyledNavTabItem = styled.div<NavTabItemProps>`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 19.2em;
  height: 5.8em;
`;

const StyledItemContent = styled.div<{
  selected: boolean;
}>`
  margin: 0;
  ${(props) => {
    if (props.selected) {
      return css`
        border-bottom: 3px solid ${teambleColors.black};

        & > span {
          font-size: 24px;
          font-weight: 700;
          color: ${teambleColors.black};
        }
      `;
    } else {
      return css`
        border: 0;

        & > span {
          font-size: 24px;
          font-weight: 500;
          color: ${teambleColors.darkGray};
        }
      `;
    }
  }}
`;
