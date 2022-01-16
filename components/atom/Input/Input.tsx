import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface InputProps {
  className?: string;
  placeholder: string;
  value?: string;
  type: string;
  onChange(str: string): void;
}

export default function Input(props: InputProps) {
  const { className, placeholder, onChange, value, type } = props;
  const [borderColor, setBorderColor] = useState(teambleColors.gray);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    onChange(value);
  }

  useEffect(() => {
    value === "" ? setBorderColor(teambleColors.gray) : setBorderColor(teambleColors.darkGray);
  }, [value]);

  return (
    <StyledInput
      className={className}
      type={type}
      borderColor={borderColor}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}></StyledInput>
  );
}

const StyledInput = styled.input<{
  borderColor: string;
}>`
  width: 410px;
  height: 63px;
  border: 2px solid ${({ borderColor }) => borderColor};
  box-sizing: border-box;
  padding: 18px 18px 18px 34px;
  outline: none;
  font-size: 18px;
  font-weight: 500;

  &::placeholder {
    color: ${teambleColors.gray};
  }
`;
