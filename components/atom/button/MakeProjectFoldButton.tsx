import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface MakeProjectFoldButtonProps {
  title: string;
  currentOption: number;
  isChecked?: boolean;
  handleCheck(): void;
  id: string;
}

export function MakeProjectFoldButton(props: MakeProjectFoldButtonProps) {
  const { isChecked = false, handleCheck, title, currentOption } = props;

  function handleClick() {
    handleCheck();
  }

  return (
    <StyledFoldButton>
      <StyledTitle isChecked={isChecked}>{title}</StyledTitle>
      <StyledButton isChecked={isChecked} onClick={handleClick}>
        {currentOption} 명
      </StyledButton>
    </StyledFoldButton>
  );
}

const StyledFoldButton = styled.div`
  width: 380px;
  height: 66px;
  font-size: 20px;
  letter-spacing: 0.03em;
  display: flex;
`;
const StyledTitle = styled.div<{
  isChecked: boolean;
}>`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => (props.isChecked ? teambleColors.deepPurple : teambleColors.deepGray)};
  color: ${(props) => (props.isChecked ? teambleColors.deepPurple : teambleColors.deepGray)};
  background-color: ${(props) => (props.isChecked ? teambleColors.lightPurple : teambleColors.white)};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
const StyledButton = styled.button<{
  isChecked: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  border: 1px solid ${(props) => (props.isChecked ? teambleColors.deepPurple : teambleColors.deepGray)};
  color: ${(props) => (props.isChecked ? teambleColors.deepPurple : teambleColors.deepGray)};
  background-color: ${teambleColors.white};
  border-left: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
