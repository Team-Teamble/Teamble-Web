import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface AreaProps {
  value: string;
  onChange(key: string, payload: string): void;
}

export function Area(props: AreaProps) {
  const { value, onChange: onUpdate } = props;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length >= 22) return;
    onUpdate("area", e.target.value);
  }

  return (
    <StyledArea>
      <div>지역</div>
      <input value={value} onChange={handleChange} />
    </StyledArea>
  );
}
const StyledArea = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;

  & > input {
    width: 462px;
    border: none;
    border-bottom: 2px solid ${teambleColors.deepGray};
    outline: none;
    margin-left: 36px;
  }
`;
