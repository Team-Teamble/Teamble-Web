import React, { useState } from "react";
import styled from "styled-components";
import { ProfileBoxFold } from "../../atom/button/ProfileBoxFold";
import { MyPageDropDown } from "../../atom/drop-down/MyPageDropDown";

export interface ProfileBoxDropDownProps {
  className?: string;
  position: { id: number; name: string }[];
  userPosition: { id: number; name: string }[];
  isEditing: boolean;
}

export function ProfileBoxDropDown(props: ProfileBoxDropDownProps) {
  const { className, position, isEditing, userPosition } = props;
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<string[]>(userPosition.map((each) => each.name));

  function handleOpen(): void {
    isEditing && setIsOpened((state) => !state);
  }

  function handleSelect(id: number): void {
    const [{ name }] = position.filter((each) => each.id === id);
    const newOption = [...currentOption];
    const idx = newOption.indexOf(name);

    if (idx > -1) {
      newOption.splice(idx, 1);
      setCurrentOption(newOption);
      return;
    }

    if (newOption.length >= 2) {
      newOption.splice(idx, 1, name);
    } else {
      newOption.push(name);
    }
    setCurrentOption(newOption);
  }

  return (
    <StyledProfileBoxDropDown className={className} onFocus={handleOpen} onBlur={handleOpen} tabIndex={-1}>
      <ProfileBoxFold isOpened={isOpened} currentOption={currentOption} />
      {isOpened && isEditing && <MyPageDropDown options={position} handleSelect={handleSelect} />}
    </StyledProfileBoxDropDown>
  );
}

const StyledProfileBoxDropDown = styled.div`
  position: relative;
`;
