import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { MakeProjectFoldButton } from "../../atom/button/MakeProjectFoldButton";
import { SingleDropDown } from "../../atom/drop-down/SingleDropDown";
export interface PositionDropDownProps {
  className?: string;
  requestInfo: number[][];
  index: number;
  meta: { id: number; name: string; positionNum: { id: number; name: string }[] };
  onClick(key: string, payload: number[][]): void;
}

export function PositionDropDown(props: PositionDropDownProps) {
  const {
    className,
    requestInfo: position,
    meta: { id, name, positionNum },
    onClick: onUpdate,
    index,
  } = props;
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<{ id: number; name: string }>(positionNum[0]);

  function handleSelect(selectedId: number): void {
    const newOption = [...position];
    newOption[index] = [id, selectedId];
    onUpdate("position", newOption);
  }

  const updateCurrent = useCallback(() => {
    const [current] = positionNum.filter((each) => each.id === position[index][1]);
    return current ? current : { id: 1, name: "0" };
  }, [position, positionNum, index]);

  function handleOpen(e: React.FocusEvent<HTMLDivElement>) {
    if (e.currentTarget !== e.target) setIsOpened((state) => !state);
  }

  useEffect(() => {
    setCurrentOption(updateCurrent());
  }, [position, updateCurrent]);

  useEffect(() => {
    setIsChecked(currentOption?.name !== positionNum[0].name);
  }, [currentOption, positionNum]);

  return (
    <StyledPositionDropDown className={className} onFocus={handleOpen} onBlur={handleOpen} tabIndex={-1}>
      <MakeProjectFoldButton
        name={name}
        currentOption={currentOption ? currentOption.name : positionNum[0].name}
        isChecked={isChecked}
      />
      {isOpened && <SingleDropDown options={positionNum} onClick={handleSelect} isFilter={false} optionType="number" />}
    </StyledPositionDropDown>
  );
}

const StyledPositionDropDown = styled.div`
  position: relative;
  width: 380px;
  height: 66px;
`;
