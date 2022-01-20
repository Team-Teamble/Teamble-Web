import React, { ReactNode } from "react";
import styled from "styled-components";
import { teambleColors } from "../../../../styles/color";

export interface RecruitPositionProps {
  // meta: { id: number; name: string; positionNum: { id: number; name: string }[] }[];
  // onClick(key: string, payload: number[][]): void;
  dropDown: ReactNode;
}

export function RecruitPosition(props: RecruitPositionProps) {
  const { dropDown } = props;
  return (
    <StyledRecruitPosition>
      <StyledTitle>모집 포지션</StyledTitle>
      <StyledDropDownContainer>{dropDown}</StyledDropDownContainer>
    </StyledRecruitPosition>
  );
}

const StyledRecruitPosition = styled.div`
  width: 1200px;
`;
const StyledTitle = styled.div`
  font-size: 24px;
  letter-spacing: -0.02em;
  font-weight: bold;
  color: ${teambleColors.black};
  margin-bottom: 23px;
`;
const StyledDropDownContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
