import React from "react";
import styled from "styled-components";
import { FindPasswordModal as Modal } from "../../atom/modal/FindPasswordModal";
import { ModalBg } from "../../atom/modal/ModalBg";

export interface FindPasswordModalProps {
  onClose?(): void;
}

export function FindPasswordModal(props: FindPasswordModalProps) {
  const { onClose } = props;
  return (
    <StyledFindPasswordModal>
      <ModalBg />
      <Modal onClose={onClose} />
    </StyledFindPasswordModal>
  );
}

const StyledFindPasswordModal = styled.div``;
