import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface CopyModalProps {
  handleClose?(): void;
}
export function CopyModal(props: CopyModalProps) {
  const { handleClose } = props;
  return (
    <StyledCopyModal>
      <span>복사되었습니다.</span>
      <button onClick={handleClose}>확인</button>
    </StyledCopyModal>
  );
}
const StyledCopyModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 415px;
  height: 148px;
  background: ${teambleColors.white};
  border-radius: 5px;
  filter: drop-shadow(2px 6px 12px rgba(0, 0, 0, 0.12));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    letter-spacing: -0.02em;
    color: ${teambleColors.black};
    margin: 20px auto 0 35px;
  }
  button {
    width: 109px;
    height: 54px;
    background-color: ${teambleColors.deepPurple};
    border: none;
    font-size: 18px;
    color: ${teambleColors.white};
    letter-spacing: -0.02em;
    font-weight: 500;
    border-radius: 28.5px;
    margin: 0 29px 14px auto;
    cursor: pointer;
  }
`;
