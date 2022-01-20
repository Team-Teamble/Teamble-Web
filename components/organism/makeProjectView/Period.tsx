import React from "react";
import styled from "styled-components";
import { MakeProjectButton as Button } from "../../atom/button/MakeProjectButton";

export interface PeriodProps {
  meta: { id: number; name: string }[];
  selectedId: number;
  onClick(key: string, payload: number): void;
}

export function Period(props: PeriodProps) {
  const { meta, selectedId, onClick: onUpdate } = props;

  function handleClick(id: number) {
    onUpdate("periodId", id);
  }

  return (
    <StyledPeriod>
      <StyledTitle>프로젝트 예상 기간</StyledTitle>
      <ButtonWrapper>
        {meta?.map(({ id, name }) => (
          <Button key={id} isChecked={selectedId === id} onClick={() => handleClick(id)}>
            {name}
          </Button>
        ))}
      </ButtonWrapper>
    </StyledPeriod>
  );
}

const StyledPeriod = styled.div``;
const StyledTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.02em;
`;
const ButtonWrapper = styled.div`
  box-sizing: border-box;
  padding-top: 40px;
  & > button {
    margin-right: 30px;
  }
`;
