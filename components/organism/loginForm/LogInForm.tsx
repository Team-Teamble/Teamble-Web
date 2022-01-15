import React, { useState } from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import { BasicButton } from "../../atom/button/BasicButton";
import { BasicLink } from "../../atom/button/BasicLink";
import Input from "../../atom/Input/Input";
import { FindPasswordModal } from "../../atom/modal/FindPasswordModal";

export interface LogInFormProps {
  className?: string;
  onLogin?(username: string, password: string): void;
}

export function LogInForm(props: LogInFormProps) {
  const { className, onLogin } = props;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleClose() {
    setIsModalOpen(false);
  }

  function handleModal(e: React.MouseEvent) {
    e.preventDefault();
    setIsModalOpen(true);
  }

  function handleUserName(value: string) {
    setUsername(value);
  }

  function handlePassword(value: string) {
    setPassword(value);
  }

  function handleLogin() {
    if (onLogin) {
      onLogin(username, password);
    }
  }

  return (
    <StyledWrapper className={className}>
      <h2>로그인</h2>
      <div>
        <Input placeholder="이메일 주소(ID)를 입력해주세요" type="text" value={username} onChange={handleUserName} />
        <Input placeholder="비밀번호를 입력해주세요" type="password" value={password} onChange={handlePassword} />
        <button onClick={handleModal}>비밀번호 찾기</button>
      </div>
      {isModalOpen && <FindPasswordModal handleClose={handleClose} />}
      <BasicButton variant="filled" disabled={false} onClick={handleLogin}>
        로그인
      </BasicButton>
      <BasicLink href="" variant="outlined">
        회원가입
      </BasicLink>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;

  & > h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 1.67em;
  }

  & > div {
    display: flex;
    flex-direction: column;

    & > input:nth-of-type(1) {
      margin-bottom: 1.3em;
    }

    & > button:nth-of-type(1) {
      border: 0;
      background-color: transparent;
      font-size: 16px;
      font-weight: 500;
      color: ${teambleColors.darkGray};
      margin: 1.5em 0 3.9em auto;
    }
  }
  & > button {
    margin-bottom: 1em;
  }
`;
