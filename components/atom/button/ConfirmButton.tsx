import React, { ReactNode } from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface ConfirmButtonProps {
  className?: string;
  children: ReactNode;

  onClick?(): void;
}

export function ConfirmButton(props: ConfirmButtonProps) {
  const { className, children, onClick } = props;
  return (
    <StyledSearchBtn onClick={onClick} className={className}>
      <span>{children}</span>
    </StyledSearchBtn>
  );
}

export const StyledSearchBtn = styled.button`
  display: inline-block;
  cursor: pointer;

  background-color: ${teambleColors.white};
  border: 1px solid ${teambleColors.deepPurple};
  border-radius: 2.85rem;
  height: 54px;
  font-size: 1.8rem;
  color: ${teambleColors.deepPurple};

  &:hover {
    background-color: ${teambleColors.deepPurple};
    border: 1px solid ${teambleColors.deepPurple};
    color: ${teambleColors.white};
  }
`;
