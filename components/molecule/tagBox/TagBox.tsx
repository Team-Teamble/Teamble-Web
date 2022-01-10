import React from "react";
import { FoldButton } from "../../atom/button/FoldButton";
import { BasicTag } from "../../atom/tag/BasicTag";

export interface TagBoxProps {
  className?: string;
  tags: { id: number; value: string }[];
  isOpen: boolean;
  isSelected: boolean;
  src?: string;

  deleteTag?(id: number): void;
  handleArrDataRemove(id: number, value: string): void;
  onClick(): void;
}

export function TagBox(props: TagBoxProps) {
  const { className, tags, isOpen, isSelected, src, deleteTag, onClick } = props;

  return (
    <FoldButton
      className={className}
      src={src}
      isTagBox={true}
      isOpen={isOpen}
      isSelected={isSelected}
      onClick={onClick}>
      {tags.map((tag) => (
        <BasicTag className={className} id={tag.id} tagSize="big" deleteTag={deleteTag}>
          {tag.value}
        </BasicTag>
      ))}
    </FoldButton>
  );
}
