import React, { useState } from "react";
import styled from "styled-components";
import { ProfileBoxFold } from "../../atom/button/ProfileBoxFold";
import { MyPageDropDown } from "../../atom/drop-down/MyPageDropDown";

export interface ProfileBoxDropDownProps {
  className?: string;
  metaPosition: { id: number; name: string }[];
  userPosition: { id: number; name: string }[];
  onChange(key: "position", payload: { id: number; name: string }[]): void;
}

export function ProfileBoxDropDown(props: ProfileBoxDropDownProps) {
  const { className, metaPosition, userPosition, onChange: onUpdate } = props;
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<{ id: number; name: string }[]>(userPosition);

  function handleOpen(): void {
    setIsOpened((state) => !state);
  }

  function handleSelect(payload: { id: number; name: string }): void {
    let index = -1;
    const newOption = currentOption.filter(({ name }, i) => {
      if (name === payload.name) index = i;
      return name !== payload.name;
    });

    if (index == -1) {
      newOption.length >= 2 ? newOption.splice(index, 1, payload) : newOption.push(payload);
    }
    console.log(newOption);
    setCurrentOption(newOption);
    onUpdate("position", newOption);
  }

  return (
    <StyledProfileBoxDropDown className={className} onFocus={handleOpen} onBlur={handleOpen} tabIndex={-1}>
      <ProfileBoxFold isOpened={isOpened} currentOption={currentOption} />
      {isOpened && <MyPageDropDown options={metaPosition} onClick={handleSelect} />}
    </StyledProfileBoxDropDown>
  );
}

const StyledProfileBoxDropDown = styled.div`
  position: relative;
`;
