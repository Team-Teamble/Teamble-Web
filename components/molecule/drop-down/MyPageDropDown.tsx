import React, { useState } from "react";
import styled from "styled-components";
import { FoldButton } from "../../atom/button/FoldButton";
import { SingleDropDown as Options } from "../../atom/drop-down/SingleDropDown";

export interface MyPageDropDownProps {
  options: { id: number; options: { id: number; option: string }[] };
  setOptions: React.Dispatch<React.SetStateAction<{ id: number; name: string }[]>>;
}

export function MyPageDropDown(props: MyPageDropDownProps) {
  const {
    options: { options },
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [currentOption, setCurrentOption] = useState(options[0].option);
  function handleSelect(id: number) {
    // const newOptions = options.map((option)=>{
    //   if(option.id === id)
    // })
    const [{ option }] = options.filter((option) => option.id === id);

    options[0].id === id ? setIsSelected(false) : setIsSelected(true);
    setCurrentOption(option);
    setIsOpen(false);
  }

  return (
    <StyledMyPageDropDown>
      <FoldButton
        isOpened={isOpen}
        isSelected={isSelected}
        onClick={() => setIsOpen((state) => !state)}
        isTagBox={false}>
        {currentOption}
      </FoldButton>
      {isOpen && <Options options={options} handleSelect={handleSelect} isFilter={true}></Options>}
    </StyledMyPageDropDown>
  );
}
const StyledMyPageDropDown = styled.div`
  position: relative;
  width: 233px;
  height: 48px;
`;
