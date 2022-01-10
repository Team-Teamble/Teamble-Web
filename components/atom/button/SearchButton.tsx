import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";

export interface SearchButtonProps {
  className?: string;
  src: string;

  onClick(): void;
}

export function SearchButton(props: SearchButtonProps) {
  const { className, src, onClick } = props;
  return (
    <StyledSearchBtn onClick={onClick}>
      <img src={src} alt="search-icon" />
      <span>검색</span>
    </StyledSearchBtn>
  );
}

const StyledSearchBtn = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;

  background-color: ${teambleColors.white};
  border: 1px solid ${teambleColors.deepPurple};
  border-radius: 1.78em;

  font-size: 1.13em;
  color: ${teambleColors.deepPurple};

  padding: 0.85em 2.38em;

  & > img {
    width: 1.23em;
    height: 1.23em;
    padding-right: 0.63em;
  }

  &:hover {
    background-color: ${teambleColors.deepPurple};
    border: 0;
    color: ${teambleColors.white};

    & > img {
      filter: brightness(0) invert(1);
    }
  }
`;
