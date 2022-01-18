import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import { MyPageFieldDropDown } from "../drop-down/MyPageFieldDropDown";
export interface FieldEditingProps {
  metaField: { id: number; name: string }[];
  onChange(key: "field", payload: { id: number; name: string }[]): void;
  field: { id: number; name: string }[];
}

export function FieldsEditing(props: FieldEditingProps) {
  const { metaField, onChange: onUpdate, field } = props;

  return (
    <StyledFieldEditing>
      <div>관심 프로젝트 분야</div>
      <MyPageFieldDropDown data={field} meta={metaField} onChange={onUpdate} />
    </StyledFieldEditing>
  );
}
const StyledFieldEditing = styled.div`
  width: 100%;
  height: 8.6em;
  margin-top: 4.4em;
  & > div:first-child {
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -0.02em;
    color: ${teambleColors.black};
    margin-bottom: 24px;
  }
`;
