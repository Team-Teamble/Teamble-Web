import React, { forwardRef, ReactNode } from "react";
import styled from "styled-components";

export interface AlertImageProps {
  className?: string;
  children: ReactNode;
  href?: string;
  onClick?(): void;
}

export const AlertLink = forwardRef<HTMLAnchorElement, AlertImageProps>(function AlertImage(
  props: AlertImageProps,
  ref,
) {
  const { className, children, href, onClick } = props;
  return (
    <StyledAlertWrapper ref={ref} className={className} href={href} onClick={onClick}>
      {children}
    </StyledAlertWrapper>
  );
});

const StyledAlertWrapper = styled.a`
  cursor: pointer;
`;
