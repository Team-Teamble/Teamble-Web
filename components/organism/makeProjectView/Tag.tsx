import React, { useState } from "react";
import { MakeProjectButton as Button } from "../../atom/button/MakeProjectButton";
import styled from "styled-components";

export interface TagProps {
  meta: { id: number; name: string }[];
  selectedId: number[];
  onClick(key: string, payload: number[]): void;
}
export function Tag(props: TagProps) {
  const { meta, selectedId, onClick: onUpdate } = props;
  const [tags, setTags] = useState(selectedId);

  function handleClick(id: number) {
    if (tags.includes(id)) {
      tags.splice(tags.indexOf(id), 1);
      onUpdate("tagId", tags);
    } else {
      tags.length >= 5 ? tags.splice(0, 1, id) : tags.push(id);
    }
    onUpdate("tagId", tags);
  }
  return (
    <StyledGoal>
      <StyledTitle>선호 협업 성향(최대 5개 선택)</StyledTitle>
      <ButtonWrapper>
        {meta?.map(({ id, name }) => (
          <Button key={id} isChecked={tags.includes(id)} onClick={() => handleClick(id)}>
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
