import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import Arrow from "../../../assets/svg/ic_drop btn_active.svg";
export interface ProfileBoxFoldProps {
  className?: string;
  isOpened: boolean;
  currentOption: string[];
}

export function ProfileBoxFold(props: ProfileBoxFoldProps) {
  const { className, isOpened, currentOption } = props;
  return (
    <StyledProfileBoxFold className={className}>
      {currentOption.join(" · ") || "선택"}
      {isOpened && <Arrow />}
    </StyledProfileBoxFold>
  );
}
const StyledProfileBoxFold = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 26px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${teambleColors.deepGray};
  border-bottom: 1px solid ${teambleColors.gray};
  cursor: pointer;

  svg {
    margin-left: 23px;
  }
`;
