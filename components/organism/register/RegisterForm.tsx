import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import { BasicButton } from "../../atom/button/BasicButton";
import Input from "../../atom/Input/Input";

import CheckActiveIcon from "../../../assets/svg/ic_check box_active.svg";
import CheckInActiveIcon from "../../../assets/svg/ic_check box_inactive.svg";
import Link from "next/link";
import { Field, RegisterFieldChanger } from "../../../utils/hook/field";

export interface RegisterFormProps {
  className?: string;
  disabled: boolean;
  field: Field;
  canPass: boolean;
  error: string;
  onChange: RegisterFieldChanger;
  onRegister?(name: string, email: string, password: string): void;
}

export function RegisterForm(props: RegisterFormProps) {
  const { className, canPass, onRegister, onChange, field, error } = props;

  const [isValid, setIsValid] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectFirst, setSelectFirst] = useState(false);
  const [selectSecond, setSelectSecond] = useState(false);

  useEffect(() => {
    onCheckAllSelect();
  }, [selectAll]);

  useEffect(() => {
    onCheckItemSelect();
  }, [selectFirst, selectSecond]);

  function onCheckItemSelect() {
    if (selectFirst && selectSecond) {
      setSelectAll(() => true);
      onCheckAllSelect();
    }

    if (selectAll) {
      if (!selectFirst) {
        setIsValid(() => false);
      } else if (!selectSecond) {
        setIsValid(() => false);
      }
    }
  }

  function onCheckAllSelect() {
    if (selectAll) {
      setIsValid(() => true);
      setSelectFirst(() => true);
      setSelectSecond(() => true);
    } else {
      setIsValid(() => false);
      setSelectFirst(() => false);
      setSelectSecond(() => false);
    }
  }

  function onSelectAll() {
    setSelectAll((selectAll) => !selectAll);
  }

  function onSelectFirst() {
    setSelectFirst((selectFirst) => !selectFirst);
  }

  function onSelectSecond() {
    setSelectSecond((selectSecond) => !selectSecond);
  }

  function handleChange(name: keyof Field) {
    return function (e: ChangeEvent<{ value: string }>) {
      const value = e.target.value;
      onChange(name, value);
    };
  }

  function onClickRegister() {
    if (onRegister) {
      onRegister(field.name, field.email, field.password);
    }
  }

  return (
    <StyledWrapper className={className}>
      <h2>회원가입</h2>
      <div>
        <span>기본정보</span>
        <Input placeholder="이름을 입력해주세요" type="text" value={field.name} onChange={handleChange("name")} />
        <Input
          placeholder="이메일 주소(ID)를 입력해주세요"
          type="text"
          value={field.email}
          onChange={handleChange("email")}
        />
        <Input
          placeholder="비밀번호를 입력해주세요"
          type="password"
          value={field.password}
          onChange={handleChange("password")}
        />
        <span>비밀번호는 6~12자 이내로 입력해주세요</span>
        <Input
          placeholder="비밀번호를 한번 더 입력해주세요"
          type="password"
          value={field.passwordCheck}
          onChange={handleChange("passwordCheck")}
        />
        <StyledCheckWrapper>
          <StyledSelectWrapper>
            {selectAll ? <CheckActiveIcon onClick={onSelectAll} /> : <CheckInActiveIcon onClick={onSelectAll} />}
            <span>모두 선택</span>
          </StyledSelectWrapper>
          <StyledInnerWrapper>
            <StyledSelectWrapper>
              {selectFirst ? (
                <CheckActiveIcon onClick={onSelectFirst} />
              ) : (
                <CheckInActiveIcon onClick={onSelectFirst} />
              )}
              <span>[필수] 개인정보 취급 방침에 동의합니다 </span>
            </StyledSelectWrapper>
            <StyledSelectWrapper>
              {selectSecond ? (
                <CheckActiveIcon onClick={onSelectSecond} />
              ) : (
                <CheckInActiveIcon onClick={onSelectSecond} />
              )}
              <span>[필수] 이용약관에 동의합니다 </span>
            </StyledSelectWrapper>
          </StyledInnerWrapper>
        </StyledCheckWrapper>
        <BasicButton variant="filled" disabled={!(isValid && canPass)} onClick={onClickRegister}>
          회원가입
        </BasicButton>
        <ErrorMessage>{error}</ErrorMessage>
        <div>
          <span>이미 계정이 있으신가요?</span>
          <Link href="/login"> 로그인</Link>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding-bottom: 16.8rem;

  & > h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 4.3rem;
  }

  & > div {
    display: flex;
    flex-direction: column;

    & > span {
      font-size: 18px;
      font-weight: 500;
      color: ${teambleColors.darkGray};
      margin-bottom: 1.8rem;
    }

    & > input + input {
      margin-top: 1.4rem;
    }

    & > span:nth-of-type(2) {
      font-size: 14px;
      font-weight: 500;
      color: ${teambleColors.deepGray};
      text-align: right;
      margin-top: 0.6rem;
    }

    & > div:last-child {
      display: flex;
      flex-direction: row;

      & > span {
        font-size: 14px;
        font-weight: 500;
        color: ${teambleColors.deepGray};
        margin-right: 0.8rem;
      }

      & > a {
        text-decoration: none;
        font-size: 14px;
        color: ${teambleColors.deepPurple};
      }
    }
    & > button {
      margin-bottom: 1em;
    }
  }
`;

const StyledCheckWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 3.8rem;
  margin-bottom: 1.8rem;

  font-size: 16px;
  font-weight: 400;
  color: ${teambleColors.darkGray};
`;

const StyledSelectWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1.4rem;
  & > svg {
    cursor: pointer;
    margin-right: 1.4rem;
  }
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

const ErrorMessage = styled.div`
  color: ${teambleColors.red};
  font-size: 1rem;

  margin-bottom: 2rem;
`;
