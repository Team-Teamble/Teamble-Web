import React, { forwardRef } from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import RightIcon from "../../../assets/svg/ic_right_arrow.svg";

export interface BannerBtnProps {
  className?: string;
  title: string;
  desc: string;
}

export const BannerButton = forwardRef<HTMLAnchorElement, BannerBtnProps>(function BannerButton(props, ref) {
  const { title, desc, className } = props;

  return (
    <StyledBannerBtn className={className} ref={ref}>
      <StyledContent>
        <StyledTitle>{title}</StyledTitle>
        <StyledDesc>{desc}</StyledDesc>
        <RightIcon />
      </StyledContent>
    </StyledBannerBtn>
  );
});

const StyledBannerBtn = styled.a`
  display: block;
  box-sizing: border-box;
  width: 38em;
  height: 10.8em;
  border: 1px solid ${teambleColors.deepPurple};
  border-radius: 8px;
  background-color: ${teambleColors.lightPurple};
  padding: 2.5em 3.1em 2.5em 1.9em;
  padding-right: auto;
  text-decoration: none;
  cursor: pointer;
  z-index: 1;

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

  & > svg {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
  }
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
  color: ${teambleColors.deepGray};
  background-color: transparent;
`;
