import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface SingleDropDownProps {
  positionNum: { id: number; name: number }[];
  handleSelect(selectedId: number): void;
}

export function SingleDropDown(props: SingleDropDownProps) {
  const { positionNum, handleSelect } = props;

  return (
    <StyledSingleDropDown>
      {positionNum.map((option) => (
        <StyledOption key={option.id} onClick={() => handleSelect(option.id)}>
          {option.name} 명
        </StyledOption>
      ))}
    </StyledSingleDropDown>
  );
}

const StyledSingleDropDown = styled.ul`
  position: absolute;
  box-sizing: border-box;
  width: 147px;
  background-color: ${teambleColors.white};
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 0 1.2em;
  top: calc(100% + 4px);
  left: 75%;
  transform: translateX(-50%);

  li:last-child {
    border: none;
  }
`;
const StyledOption = styled.li`
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  color: ${teambleColors.darkGray};
  letter-spacing: -0.6px;
  text-align: center;
  list-style-type: none;
  border-bottom: 1px solid #dfdfdf;
  padding: 8px 0;
  cursor: pointer;

  &:hover {
    color: ${teambleColors.deepPurple};
  }
`;
