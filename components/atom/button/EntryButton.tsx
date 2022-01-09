import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface EntryButtonProps {
  className?: string;
  value: string;

  onClick(): void;
}

export function EntryButton(props: EntryButtonProps) {
  const { className, value = "로그인", onClick } = props;

  return (
    <StyledButton className={className} onClick={onClick}>
      {value}
    </StyledButton>
  );
}

const StyledButton = styled.a`
  cursor: pointer;

  border: 0;
  outline: 0;
  background-color: transparent;

  width: 5.63em;
  height: 1.25em;

  color: ${teambleColors.darkGray};
  font-size: 1em;
  font-weight: 500;

  &:hover {
    color: ${teambleColors.darkPurple};
    font-weight: 700;
  }
`;
