import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import { ModalBg } from "../../atom/modal/ModalBg";
import { ConfirmButton } from "../../atom/button/ConfirmButton";

interface CilpModalProps {
  onClick(): void;
  isMobile: boolean;
}

export function ClipModal(props: CilpModalProps) {
  const { onClick, isMobile } = props;
  return (
    <>
      <ModalBg />
      <StyledClipModal>
        <StyledModal isMobile={isMobile}>
          <div>주소가 복사되었습니다!</div>
          <ConfirmButton onClick={onClick}>닫기</ConfirmButton>
        </StyledModal>
      </StyledClipModal>
    </>
  );
}

const StyledClipModal = styled.div`
  position: absolute;
  top: -500%;
  left: 50%;
  transform: translateX(-50%);
`;
const StyledModal = styled.div<{
  isMobile: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  border-radius: 5px;
  width: ${(props) => (props.isMobile ? "15em" : "20em")};
  height: ${(props) => (props.isMobile ? "8em" : "10em")};
  background: ${teambleColors.white};
  color: ${teambleColors.deepPurple};
  font-weight: bold;

  & > button {
    font-size: 1rem;
    width: 5em;
    height: 2em;
    margin-top: 2em;
  }
`;
