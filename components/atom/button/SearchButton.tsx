import React from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import SearchIcon from "../../../assets/svg/ic_search.svg";
export interface SearchButtonProps {
  className?: string;
  onClick(): void;
}

export function SearchButton(props: SearchButtonProps) {
  const { className, onClick } = props;
  return (
    <StyledSearchBtn onClick={onClick} className={className}>
      <SearchIcon />
      <span>검색</span>
    </StyledSearchBtn>
  );
}

const StyledSearchBtn = styled.button`
  width: 139px;
  height: 54px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background-color: ${teambleColors.white};
  border: 1px solid ${teambleColors.deepPurple};
  border-radius: 2.48em;

  font-size: 18px;
  color: ${teambleColors.deepPurple};

  & > svg {
    width: 1.96em;
    height: 1.96em;
    padding-right: 1em;
  }

  &:hover {
    background-color: ${teambleColors.deepPurple};
    border: 0;
    color: ${teambleColors.white};

    & > svg {
      filter: brightness(0) invert(1);
    }
  }
`;
