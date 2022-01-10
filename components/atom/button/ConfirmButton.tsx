import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface ConfirmButtonProps {
  className?: string;
  src: string;
  value: string;

  onClick(): void;
}

export function ConfirmButton(props: ConfirmButtonProps) {
  const { className, src, value, onClick } = props;
  return (
    <StyledSearchBtn onClick={onClick}>
      <span>{value}</span>
    </StyledSearchBtn>
  );
}

const StyledSearchBtn = styled.button`
  display: inline-block;
  cursor: pointer;

  background-color: ${teambleColors.white};
  border: 1px solid ${teambleColors.deepPurple};
  border-radius: 1.78em;

  font-size: 1.13em;
  color: ${teambleColors.deepPurple};

  padding: 0.85em 2.38em;

  &:hover {
    background-color: ${teambleColors.deepPurple};
    border: 0;
    color: ${teambleColors.white};
  }
`;
