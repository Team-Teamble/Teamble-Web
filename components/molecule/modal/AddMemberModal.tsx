import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import { ModalBg } from "../../atom/modal/ModalBg";
import Close from "../../../assets/svg/ic_close_.svg";
import Add from "../../../assets/svg/ic_add_square_duotone.svg";

export interface AddMemberModalProps {
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onClick(): void;
  onOpen(): void;
  error: string;
}

export function AddMemberModal(props: AddMemberModalProps) {
  const { value, onChange: handleChange, onClick: handleClick, onOpen: handleOpen, error } = props;

  return (
    <StyledAddMember>
      <ModalBg />
      <StyledModal>
        <StyledClose onClick={handleOpen} />
        <StyledTitle>팀 구성원 추가</StyledTitle>
        <StyledDesc>팀 구성원의 이메일을 입력해 팀 구성원을 추가해주세요.</StyledDesc>
        <StyledInputForm>
          <input type="email" value={value} onChange={handleChange} />
          <StyledAdd onClick={handleClick} />
        </StyledInputForm>
        <div>{error}</div>
      </StyledModal>
    </StyledAddMember>
  );
}

const StyledAddMember = styled.div``;

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -100%);
  width: 515px;
  height: 188px;
  filter: drop-shadow(2px 6px 12px rgba(0, 0, 0, 0.12));
  background-color: ${teambleColors.white};
  border-radius: 5px;

  div:last-child {
    color: ${teambleColors.red};
    height: 1em;
    font-size: 1rem;
    margin-top: 1em;
  }
`;
const StyledClose = styled(Close)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 12px;
  right: 15px;
  cursor: pointer;
`;

const StyledTitle = styled.div`
  font-weight: bold;
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${teambleColors.black};
`;

const StyledDesc = styled.div`
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.02em;
  margin-top: 5px;
  color: ${teambleColors.darkGray};
`;

const StyledInputForm = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  input {
    font-size: 20px;
    width: 300px;
    outline: none;
    border: 2px solid ${teambleColors.darkGray};
    border-radius: 5px;
  }
`;
const StyledAdd = styled(Add)`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
