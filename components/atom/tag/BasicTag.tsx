import React, { MouseEventHandler } from "react";
import styled, { css } from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface BasicTagProps {
  className?: string;
  tagSize?: "small" | "big";
  children?: string;
  src?: string;
  id: string;
  deleteTag?(id: string): void;
}

export function BasicTag(props: BasicTagProps) {
  const { tagSize = "small", children, className, src, deleteTag, id } = props;

  function handleDelete(): void {
    deleteTag && deleteTag(id);
  }

  return (
    <StyledBasicTag className={className} tagSize={tagSize} onClick={handleDelete}>
      {children}
      {src && <StyledDelete src={src} />}
    </StyledBasicTag>
  );
}

const StyledBasicTag = styled.div<{
  tagSize: string;
}>`
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.03em;
  background-color: ${teambleColors.lightPurple};
  color: #5c5c5c;
  //추후 수정
  border: 1px solid #7a5de8;
  border-radius: 2.2em;

  ${(props) =>
    props.tagSize === "small"
      ? css`
          height: 30px;
          font-size: 12px;
          padding: 7px 19px 7px 19px;
        `
      : css`
          height: 43px;
          font-size: 16px;
          padding: 11px 20px 11px 20px;
        `}
`;

const StyledDelete = styled.img`
  width: 0.9em;
  height: 0.9em;
  margin-left: 1.45em;
`;
