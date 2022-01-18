import React from "react";
import { FoldButton } from "../../atom/button/FoldButton";
import { BasicTag } from "../../atom/tag/BasicTag";

export interface TagBoxProps {
  className?: string;
  tags: { id: number; name: string }[];
  isOpened: boolean;
  isSelected: boolean;
  onClick(selectedId: number): void;
  tagSize: "small" | "big";
  default: string;
}

export function TagBox(props: TagBoxProps) {
  const { default: msg, className, tags, isOpened, isSelected, tagSize, onClick: handleDelete } = props;
  return (
    <FoldButton className={className} isTagBox={true} isOpened={isOpened} isSelected={isSelected}>
      {tags?.length
        ? tags.map((tag) => (
            <BasicTag
              key={tag.id}
              className={className}
              id={tag.id}
              tagSize={tagSize}
              onClick={handleDelete}
              isEditing={true}>
              {tag.name}
            </BasicTag>
          ))
        : msg}
    </FoldButton>
  );
}
