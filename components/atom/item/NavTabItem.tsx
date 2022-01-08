import React from "react";
import styled, { css } from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface NavTabItemProps {
  className?: string;
  value?: string;
  selected: boolean;
  onClick(): void;
}

export function NavTabItem(props: NavTabItemProps) {
  const { className = "first", value = "팀블 소개", selected, onClick } = props;

  return (
    <StyledNavTabItem className={className} selected={selected} onClick={onClick}>
      <StyledItemContent selected={selected}>
        <span>{value}</span>
      </StyledItemContent>
    </StyledNavTabItem>
  );
}

const StyledNavTabItem = styled.div<NavTabItemProps>`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 12em;
  height: 3.63em;
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
          font-size: 1.5em;
          font-weight: 700;
          color: ${teambleColors.black};
        }
      `;
    } else {
      return css`
        border: 0;

        & > span {
          font-size: 1.5em;
          font-weight: 500;
          color: ${teambleColors.darkGray};
        }
      `;
    }
  }}
`;
