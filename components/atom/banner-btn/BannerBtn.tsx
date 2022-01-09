import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface BannerBtnProps {
  className?: string;
  title: string;
  desc: string;
  href: string;
  src: string;
}

export default function BannerBtn(props: BannerBtnProps) {
  const { title, desc, href = "/", src, className } = props;
  return (
    <StyledBannerBtn className={className} href={href}>
      <StyledContent>
        <StyledTitle>{title}</StyledTitle>
        <StyledDesc>{desc}</StyledDesc>
        <StyledImg src={src} />
        {/*  */}
      </StyledContent>
    </StyledBannerBtn>
  );
}

const StyledBannerBtn = styled.a`
  display: block;
  box-sizing: border-box;
  width: 38em;
  height: 10.8em;
  border: 1px solid #7a5de8;
  //추후 컬러 추가 후 수정
  border-radius: 8px;
  background-color: ${teambleColors.white};
  padding: 2.5em 3.1em 2.5em 1.9em;
  padding-right: auto;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: ${teambleColors.lightPurple};
  }
`;
const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;
const StyledTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${teambleColors.black};
`;
const StyledDesc = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #6b6b6b;
  //추후 컬러 추가 후 수정
`;
const StyledImg = styled.img`
  position: absolute;
  width: 0.7em;
  height: 1.245em;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;
