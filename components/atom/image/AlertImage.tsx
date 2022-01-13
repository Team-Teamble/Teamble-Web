import React from "react";
import styled from "styled-components";
import AlertIcon from "../../../assets/svg/ic_bell_off.svg";

export interface AlertImageProps {
  className?: string;

  onClick(): void;
}

export function AlertImage(props: AlertImageProps) {
  const { className, onClick } = props;
  return (
    <StyledAlertWrapper className={className} onClick={onClick}>
      <AlertIcon />
    </StyledAlertWrapper>
  );
}

const StyledAlertWrapper = styled.a`
  cursor: pointer;
`;

const StyledAlertImg = styled.svg`
  width: 2.39em;
  height: 2.69em;
`;
