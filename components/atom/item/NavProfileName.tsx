import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface NavProfileNameProps {
  className?: string;
  value: string;

  onClick(): void;
}

export function NavProfileName(props: NavProfileNameProps) {
  const { className, value = "마가렛", onClick } = props;
  return (
    <StyledProfileName className={className} onClick={onClick}>
      {value}
    </StyledProfileName>
  );
}

const StyledProfileName = styled.a`
  cursor: pointer;

  font-size: 1em;
  font-weight: 500;
  color: #606060;
`;
