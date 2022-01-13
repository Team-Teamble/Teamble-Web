import { ReactNode } from "react";
import styled from "styled-components";
import { common } from "../../../styles/common";
import { teambleColors } from "../../../styles/color";

export interface BasicButtonProps {
  className?: string;
  children: ReactNode;
  variant?: "filled" | "outlined";
  disabled?: boolean;
  onClick(): void;
}

export function BasicButton(props: BasicButtonProps) {
  const { className, children, variant = "filled", disabled = false, onClick } = props;

  let backgroundColor = teambleColors.darkPurple;
  let foregroundColor = teambleColors.white;
  let borderColor = teambleColors.darkPurple;
  let backgroundColorHover = teambleColors.purple;

  if (variant === "outlined") {
    backgroundColor = teambleColors.white;
    foregroundColor = teambleColors.darkPurple;
  }
  if (disabled) {
    backgroundColor = teambleColors.lightPurple;
    foregroundColor = teambleColors.deepGray;
    borderColor = teambleColors.lightPurple;
    backgroundColorHover = teambleColors.lightPurple;
  }

  return (
    <StyledButton
      className={className}
      backgroundColor={backgroundColor}
      backgroundColorHover={backgroundColorHover}
      foregroundColor={foregroundColor}
      borderColor={borderColor}
      onClick={onClick}
      isDisabled={disabled}
      disabled={disabled}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<{
  backgroundColor: string;
  foregroundColor: string;
  backgroundColorHover: string;
  borderColor: string;
  isDisabled: boolean;
}>`
  ${common}
  background-color: ${(props) => props.backgroundColor};
  border-color: ${(props) => props.borderColor};
  color: ${(props) => props.foregroundColor};
  cursor: ${(props) => (props.isDisabled ? "unset" : "pointer")};
  &:hover {
    background-color: ${(props) => props.backgroundColorHover};
    border-color: ${(props) => (props.isDisabled ? props.borderColor : teambleColors.purple)};
    color: ${(props) => (props.isDisabled ? props.foregroundColor : teambleColors.white)};
  }
`;
