import React from "react";
import styled from "styled-components";

export interface HeaderProps {
  className?: string;
}

export function Header(props: HeaderProps) {
  const { className } = props;
  return <StyledWrapper className={className}></StyledWrapper>;
}

const StyledWrapper = styled.div`
  background-color: aqua;
  width: 100%;
  height: calc(100vh - 121.74px);
`;
