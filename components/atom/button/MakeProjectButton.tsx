import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface MakeProjectButtonProps {
  children: string;
  isChecked: boolean;
  id: number;
  handleCheck(): void;
}

export function MakeProjectButton(props: MakeProjectButtonProps) {
  const { children, isChecked = false, handleCheck } = props;

  function handleClick() {
    handleCheck();
  }

  return (
    <StyledButton isChecked={isChecked} onClick={handleClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<{
  isChecked: boolean;
}>`
  width: 175px;
  height: 66px;
  font-size: 20px;
  letter-spacing: 0.03em;
  background: ${(props) => (props.isChecked ? teambleColors.lightPurple : teambleColors.white)};
  color: ${(props) => (props.isChecked ? teambleColors.deepPurple : teambleColors.deepGray)};
  border: 1px solid ${(props) => (props.isChecked ? teambleColors.deepPurple : teambleColors.deepGray)};
  border-radius: 5px;
`;
