import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface FoldButtonProps {
  className?: string;
  children: ReactNode;
  src?: string;

  onClick(): void;
  isOpen: boolean;
  isSelected: boolean;
  isTagBox: boolean;
}

export function FoldButton(props: FoldButtonProps) {
  const { className, isTagBox, children, src, isOpen, isSelected, onClick } = props;
  return (
    <StyledWrapper isTagBox={isTagBox} isOpen={isOpen} isSelected={isSelected} onClick={onClick} className={className}>
      {children}
      <img src={src} alt="fold-icon" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<{
  isTagBox: boolean;
  isOpen: boolean;
  isSelected: boolean;
}>`
  display: ${(props) => (props.isTagBox ? "inline-flex" : "flex")};
  align-items: center;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  /* padding: ${(props) => (props.isTagBox ? "0.61em 1.11em" : "0 1.25em")}; */
  padding: 0.61em 1.11em;
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

  width: 12.93em;
  height: 2.67em;

  font-size: 18px;
  color: ${(props) => (props.isSelected ? `${teambleColors.darkPurple}` : `${teambleColors.deepGray}`)};

  & > img {
    margin-left: 1.8em;
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
  }

  & > div + div {
    margin-left: 1.8em;
  }
`;
