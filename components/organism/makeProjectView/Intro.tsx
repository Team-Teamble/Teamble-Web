import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import { teambleColors } from "../../../styles/color";
import { ImgWrapper } from "../../atom/image/ImgWrapper";
import Logo from "../../../assets/svg/ic_logo_placeholder.svg";

export interface IntroProps {
  requestInfo: { title: string; intro: string };
  fileInfo: { photo: string; url: string };
  onUpload(name: { photo: string; url: string }): void;
  onChange(key: string, payload: number | number[] | number[][] | string): void;
}

export function Intro(props: IntroProps) {
  const { onChange: onUpdate, requestInfo: info, onUpload, fileInfo } = props;
  const fileInput = useRef<HTMLInputElement>(null);

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length >= 24) return;
    onUpdate("title", e.target.value);
  }

  function handleChangeArea(e: React.ChangeEvent<HTMLTextAreaElement>) {
    let contents: string = (e.target as HTMLTextAreaElement).value;
    contents = contents.replaceAll("\n", "");
    if (e.target.value.length >= 67) return;
    onUpdate("intro", contents);
  }

  function handleImg() {
    fileInput.current?.click();
  }

  function fileLoader(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || !files[0] || !files[0].type.match("image.*")) return;

    const reader = new FileReader();
    reader.onload = () => {
      onUpload({
        photo: files[0].name,
        url: reader.result as string,
      });
    };
    reader.readAsDataURL(files[0]);
  }

  return (
    <StyledIntro>
      <StyledInputWrapper>
        <StyledTitle>프로젝트 팀 만들기</StyledTitle>
        <StyledTitleInput
          placeholder="프로젝트 제목을 적어주세요!"
          onChange={(e) => handleChangeInput(e)}
          value={info.title}
        />
        <StyledIntroInput
          placeholder="프로젝트 한 줄 소개를 적어주세요!"
          onChange={(e) => handleChangeArea(e)}
          value={info.intro}
        />
      </StyledInputWrapper>
      <StyledImgPlaceholder hasFile={fileInfo.url !== ""}>
        {fileInfo.url ? (
          <ImgWrapper ratio="50%">
            <img src={fileInfo.url} alt={fileInfo.photo} onClick={handleImg} />
          </ImgWrapper>
        ) : (
          <StyledDescWrapper onClick={handleImg}>
            <Logo />
            <div>
              팀 사진 / 서비스 소개 사진 / 로고 등<br />
              대표 이미지 첨부
            </div>
          </StyledDescWrapper>
        )}
      </StyledImgPlaceholder>
      <input type="file" ref={fileInput} onChange={fileLoader} />
    </StyledIntro>
  );
}

const StyledIntro = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;

  & > input {
    position: absolute;
    visibility: hidden;
  }
`;
const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledTitle = styled.div`
  font-weight: bold;
  font-size: 40px;
  letter-spacing: -0.05em;
  color: ${teambleColors.black};
  margin-bottom: 128px;
`;

const StyledTitleInput = styled.input`
  width: 632px;
  font-size: 30px;
  letter-spacing: -0.02em;
  outline: none;
  border: none;
  padding-bottom: 8px;
  font-weight: bold;
  border-bottom: 1px solid ${teambleColors.deepGray};

  &::placeholder {
    color: ${teambleColors.deepGray};
  }
`;
const StyledIntroInput = styled.textarea`
  width: 632px;
  height: 207px;
  font-size: 30px;
  font-weight: bold;
  resize: none;
  border: none;
  outline: none;
  background-attachment: local;
  background-image: repeating-linear-gradient(
    white,
    white 32.7%,
    ${teambleColors.black} 32.7%,
    ${teambleColors.black} 33%,
    white 33%
  );
  line-height: 69px;
  margin-top: auto;
  overflow: hidden;

  &::placeholder {
    color: ${teambleColors.deepGray};
  }
`;
const StyledImgPlaceholder = styled.div<{
  hasFile: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 513px;
  height: 513px;
  border: 1px solid ${teambleColors.deepGray};
  box-sizing: border-box;
  overflow: hidden;

  ${(props) =>
    props.hasFile &&
    css`
      & > div {
        width: 100%;
        height: 100%;
      }
    `}
`;
const StyledDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  & > svg {
    flex-shrink: 0;
  }
  & > div {
    font-size: 26px;
    line-height: 38px;
    text-align: center;
    letter-spacing: -0.02em;
    color: ${teambleColors.deepGray};
    margin-top: 27px;
    flex-shrink: 0;
  }
`;
