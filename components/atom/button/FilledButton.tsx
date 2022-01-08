import { ReactNode } from "react";
import styled from "styled-components";
import { getColor, teambleColors } from "../../../styles/color";

export interface ButtonProps {
  className?: string;
  children: ReactNode;
  variant?: "filled" | "outlined";

  onClick(): void;
}

export function FilledButton(props: ButtonProps) {
  const { className, children, variant = "filled", onClick } = props;

  let backgroundColor = teambleColors.darkPurple;
  let backgroundColorHover = teambleColors.purple;
  let foregroundColor = teambleColors.white;

  if (variant === "outlined") {
    backgroundColor = teambleColors.white;
    backgroundColorHover = teambleColors.purple;
    foregroundColor = teambleColors.darkPurple;
  }

  return (
    <StyledButton
      className={className}
      backgroundColor={backgroundColor}
      backgroundColorHover={backgroundColorHover}
      foregroundColor={foregroundColor}
      onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<{
  backgroundColor: string;
  foregroundColor: string;
  backgroundColorHover: string;
}>`
  text-align: center;
  border: 1px solid;
  border-radius: 5px;
  outline: none;

  width: 10em;
  height: 3em;

  background-color: ${(props) => props.backgroundColor};
  border-color: ${teambleColors.darkPurple};
  color: ${(props) => props.foregroundColor};

  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => props.backgroundColorHover};
    border-color: ${teambleColors.purple};
    color: ${teambleColors.white};
  }
`;
