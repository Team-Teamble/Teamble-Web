import React, { forwardRef } from "react";
import styled from "styled-components";
import AlertIcon from "../../../assets/svg/ic_bell_off.svg";

export interface AlertImageProps {
  className?: string;
}

export const AlertImage = forwardRef<HTMLAnchorElement, AlertImageProps>(function AlertImage(
  props: AlertImageProps,
  ref,
) {
  const { className } = props;
  return (
    <StyledAlertWrapper ref={ref} className={className}>
      <AlertIcon />
    </StyledAlertWrapper>
  );
});

const StyledAlertWrapper = styled.a`
  cursor: pointer;
`;
