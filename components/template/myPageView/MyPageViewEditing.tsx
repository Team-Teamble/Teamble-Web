import React, { ReactNode } from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
export interface MyPageMainEditingProps {
  className?: string;
  introInput: ReactNode;
  profileBoxEditing: ReactNode;
  tendencies: ReactNode;
  fields: ReactNode;
  editor: ReactNode;
  submit: ReactNode;
}

export function MyPageMainEditing(props: MyPageMainEditingProps) {
  const { className, introInput, profileBoxEditing, tendencies, fields, editor, submit } = props;

  return (
    <StyledMyPageMain className={className}>
      {profileBoxEditing}
      <StyledBody>
        <StyledIntro>{introInput}</StyledIntro>
        <StyledBodySection>
          {tendencies}
          {fields}
          {editor}
          {submit}
        </StyledBodySection>
      </StyledBody>
    </StyledMyPageMain>
  );
}

const StyledMyPageMain = styled.div`
  display: flex;
  position: relative;
  top: -6.375rem;
`;
const StyledBody = styled.div`
  width: 867px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-left: 11px;
`;
const StyledIntro = styled.div`
  width: 100%;
  display: flex;
  height: 6.375rem;
  font-weight: bold;
  font-size: 35px;
  letter-spacing: -0.02em;
  box-sizing: border-box;
  padding-left: 27px;
  color: ${teambleColors.white};

  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const StyledBodySection = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 1168px;
  padding: 67px 61px 0 61px;
  background: ${teambleColors.white};
  box-shadow: 3px 4px 8px 6px rgba(0, 0, 0, 0.03);
`;
