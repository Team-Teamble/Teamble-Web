import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { FoldButton } from "../../atom/button/FoldButton";
import { SingleDropDown as Options } from "../../atom/drop-down/SingleDropDown";

interface RequestInfo {
  periodId: number; // 선택한 기간 id
  positionId: number; // 선택한 협업 포지션 id
  goalId: number; // 선택한 목표 id
  tagId: number[]; // 선택한 협업 성향 id
  fieldId: number[]; // 선택한 관심 프로젝트 id
  count: number; // 한 번(한 페이지)에 받을 프로젝트 개수
  page: number; // 받을 페이지 번호 (1부터 시작)
}

export interface SingleDropDownProps {
  className?: string;
  meta: { id: number; name: string }[];
  category: keyof RequestInfo;
  onChange<K extends keyof RequestInfo>(key: K, payload: RequestInfo[K]): void;
  info: number;
}

export function SingleDropDown(props: SingleDropDownProps) {
  const { className, meta, onChange: onUpdate, category, info } = props;
  const [isOpened, setIsOpened] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [currentOption, setCurrentOption] = useState<{ id: number; name: string }>(meta[0]);

  const changeToOption = useCallback(() => {
    return meta[0].id === info
      ? meta[0]
      : meta.filter(({ id }) => {
          if (info === id) return true;
          return false;
        })[0];
  }, [info, meta]);

  useEffect(() => {
    setCurrentOption(changeToOption());
  }, [info, changeToOption]);

  useEffect(() => {
    setIsSelected(currentOption.id !== meta[0].id);
  }, [currentOption, meta]);

  function handleOpen() {
    setIsOpened((state) => !state);
  }

  function handleSelect(id: number) {
    onUpdate(category, id);
  }

  return (
    <StyledMyPageDropDown className={className} onFocus={handleOpen} onBlur={handleOpen} tabIndex={-1}>
      <FoldButton isOpened={isOpened} isSelected={isSelected} isTagBox={false}>
        {currentOption.name}
      </FoldButton>
      {isOpened && <Options options={meta} onClick={handleSelect} isFilter={true} />}
    </StyledMyPageDropDown>
  );
}
const StyledMyPageDropDown = styled.div`
  position: relative;
  width: 233px;
  height: 48px;
`;
