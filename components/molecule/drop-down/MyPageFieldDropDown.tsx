import React, { useState } from "react";
import styled from "styled-components";
import { TagBox } from "../tagBox/TagBox";
import { GroupDropDown } from "../../atom/drop-down/GroupDropDown";
export interface MyPageFieldDropDownProps {
  className?: string;
  metaField: { id: number; name: string }[];
  field: { id: number; name: string }[];
  onChange(key: "field", payload: { id: number; name: string }[]): void;
}

export function MyPageFieldDropDown(props: MyPageFieldDropDownProps) {
  const { className, metaField, onChange: onUpdate, field } = props;
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<{ id: number; name: string }[]>(field);
  const [isSelected, setIsSelected] = useState<boolean>(field.length !== 0);

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
      newOption.length >= 3 ? newOption.splice(index, 1, payload) : newOption.push(payload);
    }
    setCurrentOption(newOption);
    setIsSelected(newOption.length !== 0);
    onUpdate("field", newOption);
  }
  return (
    <StyledMyPageFieldDropDown className={className} onFocus={handleOpen} onBlur={handleOpen} tabIndex={-1}>
      <TagBox tags={currentOption} isOpened={isOpened} isSelected={isSelected} />
      {isOpened && <GroupDropDown options={metaField} onClick={handleSelect} isForMyPage={true} />}
    </StyledMyPageFieldDropDown>
  );
}

const StyledMyPageFieldDropDown = styled.div`
  display: inline-flex;
  position: relative;
`;
