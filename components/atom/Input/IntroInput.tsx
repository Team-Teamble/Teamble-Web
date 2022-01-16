import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface IntroInputProps {
  intro: string;
  onChange(key: "intro", payload: string): void;
}

export function IntroInput(props: IntroInputProps) {
  const { intro, onChange: onUpdate } = props;

  return <StyledIntroInput value={intro} onChange={(e) => onUpdate("intro", e.target.value)} />;
}

const StyledIntroInput = styled.input`
  width: 100%;
  height: 52px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${teambleColors.white};
  padding-bottom: 5px;
  outline: none;
  color: ${teambleColors.white};

  &::placeholder {
    color: ${teambleColors.white};
  }
`;
