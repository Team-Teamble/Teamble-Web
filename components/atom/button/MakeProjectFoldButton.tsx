import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface MakeProjectFoldButtonProps {
  name: string;
  currentOption: number;
  isChecked?: boolean;
  id: number;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MakeProjectFoldButton(props: MakeProjectFoldButtonProps) {
  const { isChecked = false, name, currentOption, setIsOpened } = props;

  function handleOpen() {
    setIsOpened((state) => !state);
  }

  return (
    <StyledFoldButton>
      <StyledTitle isChecked={isChecked}>{name}</StyledTitle>
      <StyledButton isChecked={isChecked} onClick={handleOpen}>
        {currentOption} 명
      </StyledButton>
    </StyledFoldButton>
  );
}

const StyledFoldButton = styled.div`
  width: 100%;
  height: 100%;
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
  cursor: pointer;
  width: 50%;
  border: 1px solid ${(props) => (props.isChecked ? teambleColors.deepPurple : teambleColors.deepGray)};
  color: ${(props) => (props.isChecked ? teambleColors.deepPurple : teambleColors.deepGray)};
  background-color: ${teambleColors.white};
  border-left: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
