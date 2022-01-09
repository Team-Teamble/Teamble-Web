import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface MyPageTagProps {
  className?: string;
  children?: string;
  onClick(): void;
}

export function MyPageTag(props: MyPageTagProps) {
  const { children, className, onClick } = props;

  return (
    <StyledMyPageTag className={className} onClick={onClick}>
      {children}
    </StyledMyPageTag>
  );
}

const StyledMyPageTag = styled.div`
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.03em;
  background-color: ${teambleColors.white};
  border: 1px solid ${teambleColors.deepGray};
  border-radius: 2.2em;
  padding: 11px 20px 11px 20px;
  height: 43px;
  font-size: 16px;

  color: #5c5c5c;
  //추후 수정

  &:hover {
    border-color: ${teambleColors.purple};
    background-color: ${teambleColors.lightPurple};
  }
`;
