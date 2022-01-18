import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface MyPageTagProps {
  className?: string;
  children?: string;
  onClick?(): void;
  isActive: boolean;
  size: "big" | "small";
}

export function MyPageTag(props: MyPageTagProps) {
  const { children, className, isActive = false, onClick: handleClick, size } = props;

  return (
    <StyledMyPageTag className={className} onClick={handleClick} isActive={isActive} size={size}>
      {children}
    </StyledMyPageTag>
  );
}

const StyledMyPageTag = styled.div<{
  isActive: boolean;
  size: "big" | "small";
}>`
  min-width: 100px;
  max-width: 158px;
  width: ${(props) => (props.size === "big" ? "158px" : "77px")};
  display: flex;
  /* padding: 0 10.5px; */
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.03em;
  background-color: ${(props) => (props.isActive ? teambleColors.lightPurple : teambleColors.white)};
  border: 1px solid ${(props) => (props.isActive ? teambleColors.purple : teambleColors.deepGray)};
  border-radius: 2.2em;
  height: 43px;
  font-size: 16px;
  cursor: pointer;
  color: #5c5c5c;
  //추후 수정

  &:hover {
    border-color: ${teambleColors.purple};
    background-color: ${teambleColors.lightPurple};
  }

  &.isActive {
    color: red;
  }
`;
