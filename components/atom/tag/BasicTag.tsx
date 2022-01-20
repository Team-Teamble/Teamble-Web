import React from "react";
import styled, { css } from "styled-components";
import { teambleColors } from "../../../styles/color";
import Close from "../../../assets/svg/ic_close_.svg";
export interface BasicTagProps {
  className?: string;
  tagSize?: "small" | "big";
  children?: string;
  id: number;
  onClick?(selectedId: number): void;
  isEditing: boolean;
}

export function BasicTag(props: BasicTagProps) {
  const { tagSize = "small", children, className, onClick: handleDelete, id, isEditing } = props;

  return (
    <StyledBasicTag className={className} tagSize={tagSize} onClick={() => handleDelete && handleDelete(id)}>
      {children}
      {isEditing && <StyledClose />}
    </StyledBasicTag>
  );
}

const StyledBasicTag = styled.div<{
  tagSize: string;
}>`
  display: inline-flex;
  align-items: center;
  letter-spacing: 0.03em;
  background-color: ${teambleColors.lightPurple};
  color: #5c5c5c;
  border: 1px solid #7a5de8;
  border-radius: 2.2em;
  justify-content: center;
  min-width: 90px;
  flex-shrink: 0;

  ${(props) =>
    props.tagSize === "small"
      ? css`
          height: 30px;
          font-size: 16px;
          padding: 0 6px 0 20px;
          font-weight: 500;
        `
      : css`
          height: 43px;
          font-size: 16px;
          font-weight: 500;
          padding: 11px 20px 11px 20px;
          box-sizing: border-box;
        `}

  & > svg {
  }
`;
const StyledClose = styled(Close)`
  width: 18px;
  height: 18px;
`;
