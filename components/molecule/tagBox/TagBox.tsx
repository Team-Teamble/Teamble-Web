import React from "react";
import { FoldButton } from "../../atom/button/FoldButton";
import { BasicTag } from "../../atom/tag/BasicTag";

export interface TagBoxProps {
  className?: string;
  tags: { id: number; name: string }[];
  isOpened: boolean;
  isSelected: boolean;
  src?: string;
  onClick?(): void;
}

export function TagBox(props: TagBoxProps) {
  const { className, tags, isOpened, isSelected } = props;

  return (
    <FoldButton className={className} isTagBox={true} isOpened={isOpened} isSelected={isSelected}>
      {tags.length
        ? tags.map((tag) => (
            <BasicTag key={tag.id} className={className} id={tag.id} tagSize="small">
              {tag.name}
            </BasicTag>
          ))
        : "선택"}
    </FoldButton>
  );
}
