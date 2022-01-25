import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import CloseIcon from "../../../assets/svg/ic_close_.svg";

export interface FindPasswordModalProps {
  open?: boolean;
  onClose?(): void;
}

export function FindPasswordModal(props: FindPasswordModalProps) {
  const { open, onClose } = props;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOuterClick(e: MouseEvent) {
      if (!open) {
        return;
      }
      if (e.target instanceof Element) {
        if (!ref.current?.contains(e.target)) {
          onClose && onClose();
        }
      }
    }

    document.addEventListener("click", onOuterClick);

    return () => {
      document.removeEventListener("click", onOuterClick);
    };
  }, [open, onClose]);

  return (
    <div>
      {open ? (
        <StyledFindPasswordModal ref={ref}>
          <StyledClose onClick={onClose} />
          <StyledDesc>
            <div>아래 이메일로 관리자에게 문의 바랍니다.</div>
            <div>napkin-plz@gmail.com</div>
          </StyledDesc>
        </StyledFindPasswordModal>
      ) : null}
    </div>
  );
}

const StyledFindPasswordModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 515px;
  height: 125px;
  background-color: ${teambleColors.white};
  filter: drop-shadow(2px 6px 12px rgba(0, 0, 0, 0.12));
  display: flex;
  align-items: center;
  border-radius: 5px;

  svg {
    position: absolute;
    right: 12px;
    top: 12px;
    cursor: pointer;
  }
`;
const StyledDesc = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  div {
    letter-spacing: -0.02em;
  }
  div:first-child {
    height: 32px;
    font-size: 22px;
    font-weight: bold;
    font-size: 22px;
    color: ${teambleColors.black};
  }
  div:last-child {
    height: 23px;
    font-size: 16px;
    color: ${teambleColors.darkGray};
  }
`;
const StyledClose = styled(CloseIcon)`
  width: 1.8em;
  height: 1.8em;
`;
