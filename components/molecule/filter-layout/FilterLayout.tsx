import React, { ReactNode } from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import Reset from "../../../assets/svg/ic_reset.svg";
import { SearchButton } from "../../atom/button/SearchButton";
export interface FilterLayoutProps {
  title: string;
  children?: ReactNode;
  onReset(): void;
}

export function FilterLayout(props: FilterLayoutProps) {
  const { title, children, onReset } = props;

  function onClick() {
    //
  }
  return (
    <StyledFilterLayout>
      <StyledTopWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledTopLine />
      </StyledTopWrapper>
      <StyledMainWrapper>
        <StyledSubTitle>키워드 태그</StyledSubTitle>
        {children}
      </StyledMainWrapper>
      <StyledSearchWrapper>
        <Reset onClick={() => onReset()} />
        <SearchButton onClick={onClick} />
      </StyledSearchWrapper>
    </StyledFilterLayout>
  );
}

const StyledFilterLayout = styled.div`
  width: 100%;
  max-height: 600px;
  border-bottom: 1px solid ${teambleColors.deepGray};
  box-sizing: border-box;
  padding-bottom: 36px;
`;
const StyledTopWrapper = styled.div`
  width: 100%;
  height: 43px;
  margin-bottom: 54px;
  display: flex;
  align-items: center;
`;
const StyledTitle = styled.div`
  box-sizing: border-box;
  width: 290px;
  padding-right: 28px;
  font-weight: bold;
  font-size: 30px;
  letter-spacing: -0.02em;
  color: ${teambleColors.black};
`;
const StyledTopLine = styled.div`
  flex-grow: 1;
  height: 3px;
  background-color: ${teambleColors.black};
`;
const StyledMainWrapper = styled.div`
  display: flex;
`;
const StyledSubTitle = styled.div`
  width: 284px;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: -0.02em;
  color: ${teambleColors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 62px;
  border-right: 1px solid ${teambleColors.gray};
`;
const StyledSearchWrapper = styled.div`
  width: 100%;
  min-height: 36px;
  display: flex;
  align-items: center;
  margin-top: 12px;

  & > svg {
    margin-left: auto;
    margin-right: 14px;
    cursor: pointer;
  }
`;
