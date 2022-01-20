import React from "react";
import styled from "styled-components";
import AddButton from "../../../assets/svg/ic_add_square_duotone.svg";
import { teambleColors } from "../../../styles/color";
export interface EmailAddButtonProps {
  className?: string;
  onClick?(): void;
}

export function EmailAddButton(props: EmailAddButtonProps) {
  const { className, onClick } = props;

  return (
    <CustomStyledWrapper className={className} onClick={onClick}>
      <StyledAddButton />
      <span>이메일로 추가</span>
    </CustomStyledWrapper>
  );
}

const CustomStyledWrapper = styled.div`
  width: 129px;
  height: 141px;
  border-radius: 0.63em;
  border: 1px solid ${teambleColors.purple};
  background-color: ${teambleColors.lightPurple};
  padding-top: 1.44em;
  padding-bottom: 1.31em;
  height: 141px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;

  & > span {
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.02em;
    color: ${teambleColors.darkGray};
  }
`;

const StyledAddButton = styled(AddButton)`
  width: 40px;
  height: 40px;
  margin-bottom: 22px;
`;
