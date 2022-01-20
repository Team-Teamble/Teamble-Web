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
      <StyledButtonWrapper>
        <StyledAddButton />
        <span>이메일로 추가</span>
      </StyledButtonWrapper>
    </CustomStyledWrapper>
  );
}

const CustomStyledWrapper = styled.div`
  width: 129px;
  height: 141px;
  border-radius: 0.63em;
  border: 1px solid ${teambleColors.purple};
  background-color: ${teambleColors.lightPurple};
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
`;

const StyledAddButton = styled(AddButton)`
  width: 40px;
  height: 40px;
`;

const StyledButtonWrapper = styled.div`
  width: 100%;
  height: 126em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 2em;
  & > span {
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.02em;
    color: ${teambleColors.darkGray};
  }
`;
