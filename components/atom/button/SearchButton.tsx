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
  border-radius: 2.48em;

  font-size: 18px;
  color: ${teambleColors.deepPurple};

  padding: 1.36em 3.8em;

  & > img {
    width: 1.96em;
    height: 1.96em;
    padding-right: 1em;
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
