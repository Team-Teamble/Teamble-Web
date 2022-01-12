import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface MyPageDropDownProps {
  options: { id: number; name: string }[];
  handleSelect(id: number): void;
}

export function MyPageDropDown(props: MyPageDropDownProps) {
  const { options, handleSelect } = props;

  return (
    <StyledMyPageDropDown>
      {/* 최대 개수 추후 프롭으로 전달 */}
      <StyledMaximum>최대 2개 선택</StyledMaximum>
      {options.map(({ id, name }) => (
        <StyledOption key={id} onClick={() => handleSelect(id)}>
          {name}
        </StyledOption>
      ))}
    </StyledMyPageDropDown>
  );
}

const StyledMyPageDropDown = styled.ul`
  box-sizing: border-box;
  width: 147px;
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
  height: 17px;
  text-align: right;
  padding-top: 7px;
  padding-bottom: 9px;
  font-size: 12px;
  color: ${teambleColors.deepGray};
  font-weight: 500;
`;
const StyledOption = styled.li`
  list-style-type: none;
  box-sizing: border-box;
  width: 100%;
  height: 41px;
  line-height: 23px;
  padding: 9px 0;
  font-size: 16px;
  font-weight: 500;
  color: ${teambleColors.deepGray};
  letter-spacing: -0.02em;
  cursor: pointer;
  border-bottom: 1px solid ${teambleColors.gray};

  &:hover {
    color: ${teambleColors.deepPurple};
  }
`;
