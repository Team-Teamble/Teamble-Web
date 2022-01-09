import { ReactNode } from "react";
import styled from "styled-components";
import { common } from "./common";
import { teambleColors } from "../../../styles/color";

export interface BasicButtonProps {
  className?: string;
  children: ReactNode;
  variant?: "filled" | "outlined";
  disabled?: boolean;
  onClick(): void;
}

export function BasicButton(props: BasicButtonProps) {
  const { className, children, variant = "filled", disabled = true, onClick } = props;

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
      isDisabled={disabled}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.div<{
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

  &:hover {
    background-color: ${(props) => props.backgroundColorHover};
    border-color: ${(props) => (props.isDisabled ? props.borderColor : teambleColors.purple)};
    color: ${(props) => (props.isDisabled ? props.foregroundColor : teambleColors.white)};
  }
`;
