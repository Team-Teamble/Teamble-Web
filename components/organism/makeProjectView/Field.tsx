import React, { useState } from "react";
import { MakeProjectButton as Button } from "../../atom/button/MakeProjectButton";
import styled from "styled-components";

export interface FieldProps {
  meta: { id: number; name: string }[];
  selectedId: number[];
  onClick(key: string, payload: number[]): void;
}
export function Field(props: FieldProps) {
  const { meta, selectedId, onClick: onUpdate } = props;
  const [fields, setFields] = useState(selectedId);

  function handleClick(id: number) {
    if (fields.includes(id)) {
      fields.splice(fields.indexOf(id), 1);
      onUpdate("fieldId", fields);
    } else {
      fields.length >= 3 ? fields.splice(0, 1, id) : fields.push(id);
    }
    onUpdate("fieldId", fields);
  }
  return (
    <StyledGoal>
      <StyledTitle>프로젝트 분야(최대 3개 선택)</StyledTitle>
      <ButtonWrapper>
        {meta?.map(({ id, name }) => (
          <Button key={id} isChecked={fields.includes(id)} onClick={() => handleClick(id)}>
            {name}
          </Button>
        ))}
      </ButtonWrapper>
    </StyledGoal>
  );
}
const StyledGoal = styled.div``;
const StyledTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.02em;
`;
const ButtonWrapper = styled.div`
  box-sizing: border-box;
  grid-template-columns: repeat(6, auto);
  display: grid;
  padding-top: 40px;
  row-gap: 32px;
`;
