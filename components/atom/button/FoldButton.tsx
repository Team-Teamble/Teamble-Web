import React, { Children, ReactNode } from "react";
import styled, { css } from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface FoldButtonProps {
  className?: string;
  children: ReactNode;
  src: string;

  onClick(): void;
  isOpen: boolean;
  isSelected: boolean;
}

export function FoldButton(props: FoldButtonProps) {
  const { className, children, src, isOpen, isSelected, onClick } = props;
  return (
    <StyledWrapper isOpen={isOpen} isSelected={isSelected} onClick={onClick}>
      {children}
      <img src={src} alt="fold-icon" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<{
  isOpen: boolean;
  isSelected: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0 1.25em;
  border: 1px solid ${(props) => (props.isSelected ? `${teambleColors.darkPurple}` : `${teambleColors.deepGray}`)};
  border-radius: 0.38em;
  width: 14.56em;
  height: 3.38em;

  font-size: 1.38em;
  color: ${(props) => (props.isSelected ? `${teambleColors.darkPurple}` : `${teambleColors.deepGray}`)};

  & > img {
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
  }
`;
