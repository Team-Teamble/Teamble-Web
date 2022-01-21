import React, { ChangeEvent, useCallback, useState } from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import { FieldToLogin, LoginFieldChanger } from "../../../utils/hook/field";
import { BasicButton } from "../../atom/button/BasicButton";
import { BasicLink } from "../../atom/button/BasicLink";
import Input from "../../atom/Input/Input";
import { FindPasswordModal } from "../../atom/modal/FindPasswordModal";

export interface LogInFormProps {
  className?: string;
  field: FieldToLogin;
  onChange: LoginFieldChanger;
  onLogin?(email: string, password: string): void;
  error: string;
}

export function LogInForm(props: LogInFormProps) {
  const { className, field, onLogin, onChange, error } = props;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleDialogOpen = () => setIsModalOpen(true);

  const handleDialogClose = useCallback(() => setIsModalOpen(false), []);

  function onChangeField(name: keyof FieldToLogin) {
    return function (e: ChangeEvent<{ value: string }>) {
      const value = e.target.value;
      onChange(name, value);
    };
  }

  function onProcessLogin() {
    if (onLogin) {
      onLogin(field.email, field.password);
    }
  }

  return (
    <StyledWrapper className={className}>
      <h2>로그인</h2>
      <div>
        <Input
          placeholder="이메일 주소(ID)를 입력해주세요"
          type="text"
          value={field.email}
          onChange={onChangeField("email")}
        />
        <Input
          placeholder="비밀번호를 입력해주세요"
          type="password"
          value={field.password}
          onChange={onChangeField("password")}
        />
        <button onClick={handleDialogOpen}>비밀번호 찾기</button>
      </div>
      <FindPasswordModal open={isModalOpen} onClose={handleDialogClose}></FindPasswordModal>
      <ErrorMessage>{error}</ErrorMessage>
      <BasicButton variant="filled" disabled={false} onClick={onProcessLogin}>
        로그인
      </BasicButton>
      <BasicLink href="/register" variant="outlined">
        회원가입
      </BasicLink>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
      margin: 1.5em 0 2.5em auto;
    }
  }
  & > button {
    margin-bottom: 1em;
  }
`;
const ErrorMessage = styled.div`
  color: ${teambleColors.red};
  font-size: 1rem;
  height: 1.25em;
  margin-bottom: 1rem;
  align-self: flex-start;
`;
