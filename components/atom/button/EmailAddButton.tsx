import React from "react";
import styled from "styled-components";
import { StyledWrapper } from "../../molecule/crewTag/CrewTag";

export interface EmailAddButtonProps {
  className?: string;
  addImgSrc?: string;

  onClick(): void;
}

export function EmailAddButton(props: EmailAddButtonProps) {
  const { className, addImgSrc, onClick } = props;
  return (
    <CustomStyledWrapper>
      <img src={addImgSrc} alt="email-add-icon" />
      <span>이메일로 추가</span>
    </CustomStyledWrapper>
  );
}

const CustomStyledWrapper = styled(StyledWrapper)``;
