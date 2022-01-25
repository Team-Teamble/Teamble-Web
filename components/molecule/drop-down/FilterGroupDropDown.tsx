import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { TagBox } from "../tagBox/TagBox";
import { GroupDropDown } from "../../atom/drop-down/GroupDropDown";

interface RequestInfo {
  periodId: number; // 선택한 기간 id
  positionId: number; // 선택한 협업 포지션 id
  goalId: number; // 선택한 목표 id
  tagId: number[]; // 선택한 협업 성향 id
  fieldId: number[]; // 선택한 관심 프로젝트 id
  count: number; // 한 번(한 페이지)에 받을 프로젝트 개수
  page: number; // 받을 페이지 번호 (1부터 시작)
}

export interface FilterGroupDropDownProps {
  className?: string;
  meta: { id: number; name: string }[];
  category: keyof RequestInfo;
  onChange<K extends keyof RequestInfo>(key: K, payload: RequestInfo[K]): void;
  onReset?(category?: string, id?: number[]): void;
  info: number[];
}

export function FilterGroupDropDown(props: FilterGroupDropDownProps) {
  const { className, meta, onChange: onUpdate, category, onReset, info } = props;
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<{ id: number; name: string }[]>([]);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const changeToOption = useCallback(() => {
    return meta[0].id === info[0]
      ? []
      : meta.filter(({ id }) => {
          for (let i = 0; i < info.length; i++) if (info[i] === id) return true;
          return false;
        });
  }, [info, meta]);

  useEffect(() => {
    setCurrentOption(changeToOption());
  }, [info, changeToOption]);

  useEffect(() => {
    setIsSelected(currentOption.length !== 0);
  }, [currentOption]);

  function handleOpen(): void {
    setIsOpened((state) => !state);
  }

  function handleSelect(payload: { id: number; name: string }): void {
    let index = -1;

    if (payload.id === meta[0].id) {
      onReset && onReset(category, [1]);
      return;
    }

    const newOption = currentOption.filter(({ name }, i) => {
      if (name === payload.name) index = i;
      return name !== payload.name;
    });

    if (index == -1) {
      newOption.length >= 3 ? newOption.splice(index, 1, payload) : newOption.push(payload);
    }

    onUpdate(
      category,
      newOption.map(({ id }) => id),
    );
  }

  function handleDelete(selectedId: number) {
    const newOption = currentOption.filter(({ id }) => id !== selectedId);
    const payload = newOption.length === 0 ? [1] : newOption.map(({ id }) => id);
    onUpdate(category, payload);
  }

  return (
    <StyledMyPageFieldDropDown className={className} onFocus={handleOpen} onBlur={handleOpen} tabIndex={-1}>
      <TagBox
        tags={currentOption}
        isOpened={isOpened}
        isSelected={isSelected}
        onClick={handleDelete}
        tagSize="small"
        default="전체"
      />
      {isOpened && <GroupDropDown key={category} options={meta} onClick={handleSelect} isForMyPage={true} />}
    </StyledMyPageFieldDropDown>
  );
}

const StyledMyPageFieldDropDown = styled.div`
  display: flex;
  position: relative;
`;
