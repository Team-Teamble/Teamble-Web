import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface SingleDropDownProps {
  options: { id: number; name: string }[];
  onClick(selectedId: number): void;
  isFilter: boolean;
}

export function SingleDropDown(props: SingleDropDownProps) {
  const { options, onClick: handleSelect, isFilter } = props;

  return (
    <StyledSingleDropDown isFilter={isFilter}>
      {options.map((option) => (
        <StyledOption key={option.id} onClick={() => handleSelect(option.id)} isFilter={isFilter}>
          {option.name}
        </StyledOption>
      ))}
    </StyledSingleDropDown>
  );
}

const StyledSingleDropDown = styled.ul<{
  isFilter: boolean;
}>`
  position: absolute;
  box-sizing: border-box;
  width: ${(props) => (props.isFilter ? "100%" : "147px")};
  background-color: ${teambleColors.white};
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 0 1.2em;
  top: calc(100% + 9px);
  left: ${(props) => (props.isFilter ? "50%" : "75%")};
  transform: translateX(-50%);
  z-index: 5;

  li:last-child {
    border: none;
  }
`;
const StyledOption = styled.li<{
  isFilter: boolean;
}>`
  width: 100%;
  height: 40px;
  font-size: 16px;
  color: ${teambleColors.darkGray};
  letter-spacing: -0.6px;
  text-align: ${(props) => (props.isFilter ? "left" : "center")};
  list-style-type: none;
  border-bottom: 1px solid #dfdfdf;
  padding: 8px 0;
  box-sizing: border-box;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: ${teambleColors.deepPurple};
  }
`;
