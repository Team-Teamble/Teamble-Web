import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import Arrow from "../../../assets/svg/ic_dropdown.svg";
import { teambleColors } from "../../../styles/color";

export interface FoldButtonProps {
  className?: string;
  children: ReactNode;
  onClick?(): void;
  isOpened: boolean;
  isSelected: boolean;
  isTagBox: boolean;
}

export function FoldButton(props: FoldButtonProps) {
  const { className, isTagBox, children, isOpened, isSelected, onClick } = props;
  return (
    <StyledWrapper
      isTagBox={isTagBox}
      isOpened={isOpened}
      isSelected={isSelected}
      onClick={onClick}
      className={className}>
      {children}
      <Arrow />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<{
  isTagBox: boolean;
  isOpened: boolean;
  isSelected: boolean;
}>`
  min-width: 212px;
  height: 38px;
  display: ${(props) => (props.isTagBox ? "inline-flex" : "flex")};
  align-items: center;
  cursor: pointer;
  padding: 0 1.11em;
  border: 1px solid ${(props) => (props.isSelected ? `${teambleColors.darkPurple}` : `${teambleColors.deepGray}`)};
  box-sizing: border-box;
  border-radius: 0.38em;

  ${(props) => {
    if (!props.isTagBox) {
      return css`
        width: 100%;
        height: 100%;
      `;
    }
  }}

  font-size: 18px;
  color: ${(props) => (props.isSelected ? `${teambleColors.darkPurple}` : `${teambleColors.deepGray}`)};

  & > svg {
    margin-left: 1.8em;
    transform: ${(props) => (props.isOpened ? "rotate(180deg)" : "rotate(0)")};
  }

  & > div + div {
    margin-left: 1.8em;
  }
`;
