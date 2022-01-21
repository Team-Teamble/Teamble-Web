import React, { forwardRef } from "react";
import styled from "styled-components";
import Arrow from "../../../assets/svg/ic_expand_right.svg";
import { teambleColors } from "../../../styles/color";

export interface ProfileTestBtnProps {
  className?: string;
}

export const ProfileTestButton = forwardRef<HTMLDivElement, ProfileTestBtnProps>(function ProfileTestButton(
  props: ProfileTestBtnProps,
  ref,
) {
  const { className } = props;
  return (
    <StyledEditBtn className={className} ref={ref}>
      <Arrow />
      <span>협업 성향 테스트 하러가기</span>
    </StyledEditBtn>
  );
});

const StyledEditBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 257px;
  height: 40px;
  border: 0;
  border-radius: 2.2em;
  background-color: ${teambleColors.purple};
  font-size: 16px;
  color: ${teambleColors.white};
  cursor: pointer;

  & > svg {
    width: 24px;
    height: 24px;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: ${teambleColors.darkPurple};
  }
`;
