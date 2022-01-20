import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/svg/logo_img.svg";
import Insta from "../../../assets/svg/ic_insta.svg";
import { teambleColors } from "../../../styles/color";

export interface FooterProps {
  className?: string;
  onClick?(): void;
}

export function Footer(props: FooterProps) {
  const { className } = props;
  return (
    <StyledFooter className={className}>
      <StyledFooterTop>
        <Logo />
        <StyledNav>
          <a href="">팀블 소개</a>
          <StyledSplit />
          <a href="">팀블 소식</a>
          <StyledSplit />
          <a href="">협업 성향 테스트</a>
          <StyledSplit />
          <a href="">개인정보취급방침</a>
          <StyledSplit />
          <a href="">이용약관</a>
        </StyledNav>
      </StyledFooterTop>
      <StyledFooterBottom>
        <StyledBottomLeft>
          <div className="info">
            <div className="copyright">Copyright © 2021 teamble NETWORK Inc. All rights reserved</div>
            <div className="e-mail">E-mail : teamble@gmail.com</div>
          </div>
          <div className="team">
            <span className="part">PM</span> <span>심유나, 손예현</span>
            <span className="part">DESIGNER</span> <span>노유정, 원종화</span>
            <span className="part">WEB DEVELOPER</span> <span>박건영, 김연이, 정세연</span>
            <span className="part">SERVER DEVELOPER</span> <span>박현지, 문규원</span>
          </div>
        </StyledBottomLeft>
        <StyledBottomRight>
          <span>Follow Us</span>
          <Insta />
        </StyledBottomRight>
      </StyledFooterBottom>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40em;
  box-sizing: border-box;
  padding: 4.9rem 3.6rem;
  background-color: ${teambleColors.lightPurple};
  box-shadow: 0px -4px 20px 2px #00000012;
  zoom: 70%;
`;

const StyledFooterTop = styled.div`
  margin-bottom: 6em;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 1em;
  margin-top: 2rem;

  & > a {
    text-decoration: none;
    font-size: 14px;
    color: ${teambleColors.darkGray};
    margin-left: 1em;
  }
`;

const StyledSplit = styled.div`
  width: 1px;
  height: 13px;
  background-color: ${teambleColors.darkGray};
  margin-left: 1.4em;
`;

const StyledFooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 1.5em;
`;

const StyledBottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.4em;

  .info {
    display: flex;
    margin-bottom: 0.7em;
  }

  .copyright {
    font-size: 16px;
    font-weight: 400;
    color: ${teambleColors.deepGray};
    margin-right: 1.56em;
  }

  .e-mail {
    font-size: 16px;
    font-weight: 400;
    color: ${teambleColors.deepGray};
  }

  .team {
    font-size: 12px;
    font-weight: 500;
    color: ${teambleColors.deepGray};
    margin-left: -1em;

    .part {
      color: ${teambleColors.brightPurple};
      margin-left: 1em;
    }
  }
`;

const StyledBottomRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  font-size: 18px;
  font-weight: 500;
  color: ${teambleColors.brightPurple};

  & > span {
    margin-bottom: 0.78em;
  }
`;
