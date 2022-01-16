import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
export function ModalBg() {
  return <StyledModalBg />;
}

const StyledModalBg = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: ${teambleColors.black};
  opacity: 0.2;
`;
