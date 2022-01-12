import React, { useState } from "react";
import styled from "styled-components";
import { MakeProjectFoldButton } from "../../atom/button/MakeProjectFoldButton";
import { SingleDropDown } from "../../atom/drop-down/SingleDropDown";
export interface PositionDropDownProps {
  eachInfo: { id: number; name: string; positionNum: { id: number; option: string }[] };
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
    const newSelectedPositions: { id: number; numId: number }[] = selectedPositions.map((position) => {
      if (position.id === id) position.numId = selectedId;
      return position;
    });

    positionNum[0].id === selectedId ? setIsChecked(false) : setIsChecked(true);
    setSelectedPositions(newSelectedPositions);
    setIsOpened(false);
  }

  function setCurrentOption(): string {
    const [{ numId }] = selectedPositions.filter((position) => position.id === id);
    const [{ option }] = positionNum.filter((option) => option.id === numId);
    return option;
  }

  function handleOpen() {
    setIsOpened((state) => !state);
  }

  return (
    <StyledPositionDropDown>
      <MakeProjectFoldButton
        name={name}
        id={id}
        currentOption={setCurrentOption()}
        handleOpen={handleOpen}
        isChecked={isChecked}
      />
      {isOpened && <SingleDropDown options={positionNum} handleSelect={handleSelect} isFilter={false}></SingleDropDown>}
    </StyledPositionDropDown>
  );
}

const StyledPositionDropDown = styled.div`
  position: relative;
  width: 380px;
  height: 66px;
`;
