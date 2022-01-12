import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface GroupDropDownProps {
  options: { id: number; name: string }[];
  onClick(): void;
}

export function GroupDropDown(props: GroupDropDownProps) {
  const { options, onClick } = props;

  return (
    <StyledGroupDropDown>
      {/* 최대 개수 추후 프롭으로 전달 */}
      <StyledMaximum>최대 3개 선택</StyledMaximum>
      {options.map(({ id, name }) => (
        <StyledOption key={id} onClick={onClick}>
          {name}
        </StyledOption>
      ))}
    </StyledGroupDropDown>
  );
}

const StyledGroupDropDown = styled.ul`
  box-sizing: border-box;
  width: 233px;
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
