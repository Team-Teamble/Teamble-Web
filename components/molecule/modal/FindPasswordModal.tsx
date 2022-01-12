import React from "react";
import styled from "styled-components";
import { FindPasswordModal as Modal } from "../../atom/modal/FindPasswordModal";
import { ModalBg } from "../../atom/modal/ModalBg";

export interface FindPasswordModalProps {
  handleClose?(): void;
}

export function FindPasswordModal(props: FindPasswordModalProps) {
  const { handleClose } = props;
  return (
    <StyledFindPasswordModal>
      <ModalBg />
      <Modal handleClose={handleClose} />
    </StyledFindPasswordModal>
  );
}

const StyledFindPasswordModal = styled.div``;
