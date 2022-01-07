import { ReactNode } from "react";
import styled from "styled-components";
import { ColorName, getColor } from "../../../styles/color";

export interface ButtonProps {
  className?: string;
  children: ReactNode;
  variant?: "filled" | "outlined";

  onClick(): void;
}

export function FilledButton(props: ButtonProps) {
  const { className, children, variant = "filled", onClick } = props;

  let backgroundColor = getColor("primaryDark");
  let backgroundColorHover = getColor("primaryLight");
  let foregroundColor = getColor("white");

  if (variant === "outlined") {
    backgroundColor = getColor("white");
    backgroundColorHover = getColor("white");
    foregroundColor = getColor("primaryDark");
  }

  return (
    <StyledButton
      className={className}
      backgroundColor={backgroundColor}
      backgroundColorHover={backgroundColorHover}
      foregroundColor={foregroundColor}
      onClick={onClick}
    >
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
  border-color: ${getColor("primary")};
  color: ${(props) => props.foregroundColor};

  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => props.backgroundColorHover};
    border-color: ${getColor("primaryLight")};
  }
`;
