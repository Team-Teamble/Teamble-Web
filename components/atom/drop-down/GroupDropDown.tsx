import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface GroupDropDownProps {
  className?: string;
  options: { id: number; name: string }[];
  onClick(payload: { id: number; name: string }): void;
  isForMyPage: boolean;
}

export function GroupDropDown(props: GroupDropDownProps) {
  const { options, onClick: handleSelect, isForMyPage, className } = props;

  return (
    <StyledGroupDropDown className={className} isForMyPage={isForMyPage}>
      <StyledMaximum>최대 3개 선택</StyledMaximum>
      {options.map(({ id, name }) => (
        <StyledOption key={id} onClick={() => handleSelect({ id, name })}>
          {name}
        </StyledOption>
      ))}
    </StyledGroupDropDown>
  );
}

const StyledGroupDropDown = styled.ul<{
  isForMyPage: boolean;
}>`
  position: absolute;
  top: calc(100% + 0.9em);
  right: 0;
  box-sizing: border-box;
  width: ${(props) => (props.isForMyPage ? "212px" : "233px")};
  max-height: 234px;
  box-shadow: 0.2em 0.6em 1.2em rgba(0, 0, 0, 0.12);
  border-radius: 0.4em;
  background-color: ${teambleColors.white};
  padding: 0 1.2em;
  overflow: auto;

  & > li:last-child {
    border: none;
  }
`;
const StyledMaximum = styled.div`
  width: 100%;
  height: 27px;
  text-align: right;
  padding-top: 8px;
  font-size: 12px;
  color: ${teambleColors.deepGray};
  font-weight: 500;
`;
const StyledOption = styled.li`
  list-style-type: none;
  box-sizing: border-box;
  width: 100%;
  height: 39px;
  line-height: 23px;
  padding: 8px 0;
  font-size: 16px;
  font-weight: 500;
  color: ${teambleColors.darkGray};
  letter-spacing: -0.02em;
  cursor: pointer;
  border-bottom: 1px solid ${teambleColors.gray};

  &:hover {
    color: ${teambleColors.deepPurple};
  }
`;
