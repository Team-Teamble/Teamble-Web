import React from "react";
import styled from "styled-components";
import { CopyModal as Modal } from "../../atom/modal/CopyModal";
import { ModalBg } from "../../atom/modal/ModalBg";
export interface CopyModalProps {
  handleClose?(): void;
}

export function CopyModal(props: CopyModalProps) {
  const { handleClose } = props;
  return (
    <StyledCopyModal>
      <ModalBg />
      <Modal handleClose={handleClose} />
    </StyledCopyModal>
  );
}

const StyledCopyModal = styled.div``;
