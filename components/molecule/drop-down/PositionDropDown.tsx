import React, { useState } from "react";
import styled from "styled-components";
import { MakeProjectFoldButton } from "../../atom/button/MakeProjectFoldButton";
import { SingleDropDown } from "../../atom/drop-down/SingleDropDown";
export interface PositionDropDownProps {
  eachInfo: { id: number; name: string; positionNum: { id: number; name: number }[] };
  selectedPositions: { id: number; numId: number }[];
  setSelectedPositions: React.Dispatch<React.SetStateAction<{ id: number; numId: number }[]>>;
}
export function PositionDropDown(props: PositionDropDownProps) {
  const {
    eachInfo: { id, name, positionNum },
    selectedPositions,
    setSelectedPositions,
  } = props;
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  function handleSelect(selectedId: number): void {
    const [{ name }]: { id?: number; name: number }[] = positionNum.filter((option) => option.id === selectedId);
    const newSelectedPositions: { id: number; numId: number }[] = selectedPositions.map((position) => {
      if (position.id === id) position.numId = selectedId;
      return position;
    });

    name === 0 ? setIsChecked(false) : setIsChecked(true);
    setSelectedPositions(newSelectedPositions);
    setIsOpened(false);
  }

  function setCurrentOption(): number {
    const [{ numId }] = selectedPositions.filter((position) => position.id === id);
    const [{ name }] = positionNum.filter((option) => option.id === numId);
    return name;
  }

  return (
    <StyledPositionDropDown>
      <MakeProjectFoldButton
        name={name}
        id={id}
        currentOption={setCurrentOption()}
        setIsOpened={setIsOpened}
        isChecked={isChecked}
      />
      {isOpened && <SingleDropDown positionNum={positionNum} handleSelect={handleSelect}></SingleDropDown>}
    </StyledPositionDropDown>
  );
}

const StyledPositionDropDown = styled.div`
  position: relative;
  width: 380px;
  height: 66px;
`;
