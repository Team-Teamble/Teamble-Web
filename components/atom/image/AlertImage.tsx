import React from "react";
import styled from "styled-components";

export interface AlertImageProps {
  className?: string;
  src: string;

  onClick(): void;
}

export function AlertImage(props: AlertImageProps) {
  const { className, src, onClick } = props;
  return (
    <StyledAlertWrapper className={className} onClick={onClick}>
      <StyledAlertImg className={className} src={src} />
    </StyledAlertWrapper>
  );
}

const StyledAlertWrapper = styled.a`
  cursor: pointer;
`;

const StyledAlertImg = styled.img`
  width: 1.33em;
  height: 1.18em;
`;
