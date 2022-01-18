import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TagBox } from "../tagBox/TagBox";
import { GroupDropDown } from "../../atom/drop-down/GroupDropDown";
export interface MyPageFieldDropDownProps {
  className?: string;
  meta: { id: number; name: string }[];
  data?: { id: number; name: string }[];
  onChange(key: "field", payload: { id: number; name: string }[]): void;
}

export function MyPageFieldDropDown(props: MyPageFieldDropDownProps) {
  const { className, meta, onChange: onUpdate, data } = props;
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<{ id: number; name: string }[]>(data ? data : []);
  const [isSelected, setIsSelected] = useState<boolean>(data ? data.length !== 0 : false);

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
    onUpdate("field", newOption);
  }

  function handleDelete(selectedId: number) {
    const newOption = currentOption.filter(({ id }) => id !== selectedId);
    onUpdate("field", newOption);
  }
  useEffect(() => {
    setIsSelected(data ? data.length !== 0 : false);
    setCurrentOption(data ? data : []);
  }, [data]);
  return (
    <StyledMyPageFieldDropDown className={className} onFocus={handleOpen} onBlur={handleOpen} tabIndex={-1}>
      <TagBox
        tags={currentOption}
        isOpened={isOpened}
        isSelected={isSelected}
        default="선택"
        tagSize="small"
        onClick={handleDelete}
      />
      {isOpened && <GroupDropDown options={meta} onClick={handleSelect} isForMyPage={true} />}
    </StyledMyPageFieldDropDown>
  );
}

const StyledMyPageFieldDropDown = styled.div`
  display: inline-flex;
  position: relative;
`;
