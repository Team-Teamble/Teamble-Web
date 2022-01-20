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
      <StyledSearch />
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

  &:hover {
    background-color: ${teambleColors.deepPurple};
    border: 0;
    color: ${teambleColors.white};

    & > svg {
      filter: brightness(0) invert(1);
    }
  }
`;
const StyledSearch = styled(SearchIcon)`
  width: 1.8em;
  height: 1.8em;
  margin-right: 0.2em;

  &:hover {
    filter: brightness(0) invert(1);
  }
`;
