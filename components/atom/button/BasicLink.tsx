import { ReactNode } from "react";
import styled from "styled-components";
import { common } from "../../../styles/common";
import { teambleColors } from "../../../styles/color";

export interface BasicLinkProps {
  className?: string;
  children: ReactNode;
  variant?: "filled" | "outlined";
  href: string;
}

export function BasicLink(props: BasicLinkProps) {
  const { className, children, href, variant = "filled" } = props;

  let backgroundColor = teambleColors.darkPurple;
  let foregroundColor = teambleColors.white;
  const borderColor = teambleColors.darkPurple;
  const backgroundColorHover = teambleColors.purple;

  if (variant === "outlined") {
    backgroundColor = teambleColors.white;
    foregroundColor = teambleColors.darkPurple;
  }
  return (
    <StyledButton
      className={className}
      backgroundColor={backgroundColor}
      backgroundColorHover={backgroundColorHover}
      foregroundColor={foregroundColor}
      borderColor={borderColor}
      href={href}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.a<{
  backgroundColor: string;
  foregroundColor: string;
  backgroundColorHover: string;
  borderColor: string;
}>`
  ${common}
  display: block;
  text-decoration: none;
  cursor: pointer;

  background-color: ${(props) => props.backgroundColor};
  border-color: ${(props) => props.borderColor};
  color: ${(props) => props.foregroundColor};

  &:hover {
    background-color: ${(props) => props.backgroundColorHover};
    border-color: ${(props) => props.backgroundColorHover};
    color: ${teambleColors.white};
  }
`;
