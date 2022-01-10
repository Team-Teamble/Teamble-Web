import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface MyPageTagProps {
  className?: string;
  children?: string;
  setIsActive(): void;
  isActive: boolean;
}

export function MyPageTag(props: MyPageTagProps) {
  const { children, className, setIsActive, isActive = false } = props;

  function handleClick() {
    setIsActive();
  }

  return (
    <StyledMyPageTag className={className} onClick={handleClick} isActive={isActive}>
      {children}
    </StyledMyPageTag>
  );
}

const StyledMyPageTag = styled.div<{
  isActive: boolean;
}>`
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.03em;
  background-color: ${(props) => (props.isActive ? teambleColors.lightPurple : teambleColors.white)};
  border: 1px solid ${(props) => (props.isActive ? teambleColors.purple : teambleColors.deepGray)};
  border-radius: 2.2em;
  padding: 11px 20px 11px 20px;
  height: 43px;
  font-size: 16px;
  cursor: pointer;
  color: #5c5c5c;
  //추후 수정

  &:hover {
    border-color: ${teambleColors.purple};
    background-color: ${teambleColors.lightPurple};
  }
`;
