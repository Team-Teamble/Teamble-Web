import React, { ReactNode } from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface ConfirmButtonProps {
  className?: string;
  children: ReactNode;

  onClick(): void;
}

export function ConfirmButton(props: ConfirmButtonProps) {
  const { className, children, onClick } = props;
  return (
    <StyledSearchBtn onClick={onClick} className={className}>
      <span>{children}</span>
    </StyledSearchBtn>
  );
}

const StyledSearchBtn = styled.button`
  display: inline-block;
  cursor: pointer;

  background-color: ${teambleColors.white};
  border: 1px solid ${teambleColors.deepPurple};
  border-radius: 2.85rem;

  font-size: 1.8rem;
  color: ${teambleColors.deepPurple};

  padding: 0.8rem 2.7rem;

  &:hover {
    background-color: ${teambleColors.deepPurple};
    border: 0;
    color: ${teambleColors.white};
  }
`;
