import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import { BasicTag } from "../../atom/tag/BasicTag";
export interface FieldsProps {
  field: { id: number; name: string }[];
}

export function Fields(props: FieldsProps) {
  const { field } = props;
  return (
    <StyledFields>
      <div>관심 프로젝트 분야</div>
      <StyledTagWrapper>
        {field.map(({ id, name }) => (
          <BasicTag tagSize="big" key={id} id={id}>
            {name}
          </BasicTag>
        ))}
      </StyledTagWrapper>
    </StyledFields>
  );
}
const StyledFields = styled.div`
  width: 100%;
  height: 9.8em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 8.3em;

  & > div:first-child {
    font-weight: 500;
    font-size: 18px;
    height: 1.625rem;
    line-height: 1.625rem;
    letter-spacing: -0.02em;
    color: ${teambleColors.black};
  }
`;
const StyledTagWrapper = styled.div`
  width: 100%;
  height: 4.5em;
  display: flex;
  flex-wrap: wrap;

  & > div {
    margin-right: 1em;
  }
`;
