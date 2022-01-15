import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor as EditorType, EditorProps } from "@toast-ui/react-editor";
import dynamic from "next/dynamic";
import { forwardRef, useEffect, useRef } from "react";
import styled from "styled-components";
import { TuiEditorWithForwardedProps } from "./TuiWrapper";

interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void;
}

const Editor = dynamic<TuiEditorWithForwardedProps>(
  () => import("./TuiWrapper").then((module) => module.TuiEditorWrapper),
  { ssr: false },
);
const EditorWithRef = forwardRef<EditorType | undefined, EditorPropsWithHandlers>(function EditorWithRef(props, ref) {
  return <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />;
});

export interface DocumentEditorProps {
  className?: string;
  value?: string;
  onChange(str: string): void;
}

export function DocumentEditor(props: DocumentEditorProps) {
  const { className, value = "", onChange } = props;

  const ref = useRef<EditorType>(null);

  useEffect(() => {
    ref.current?.getInstance().setMarkdown(value);
  }, [value]);

  function handleChange() {
    const markdown = ref.current?.getInstance().getMarkdown() ?? "";
    onChange(markdown);
  }

  return (
    <StyledEditorWrapper className={className}>
      <EditorWithRef ref={ref} initialEditType="wysiwyg" useCommandShortcut={true} onChange={handleChange} />
    </StyledEditorWrapper>
  );
}

const StyledEditorWrapper = styled.div`
  height: 100em;
`;
