import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor as EditorType, EditorProps } from "@toast-ui/react-editor";
import dynamic from "next/dynamic";
import { forwardRef, useImperativeHandle, useRef } from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
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
  onChange?(str: string): void;
}

export interface DocumentEditorRef {
  getMarkdown(): string;
  setMarkdown(markdown: string): void;
}

export const DocumentEditor = forwardRef(function DocumentEditor(props: DocumentEditorProps, ref) {
  const { className, onChange } = props;

  useImperativeHandle(ref, () => {
    return {
      setMarkdown(markdown: string) {
        return editorRef.current?.getInstance().setMarkdown(markdown);
      },
      getMarkdown() {
        return editorRef.current?.getInstance().getMarkdown();
      },
    };
  });

  const editorRef = useRef<EditorType>(null);

  function handleChange() {
    const markdown = editorRef.current?.getInstance().getMarkdown() ?? "";
    onChange && onChange(markdown);
  }

  return (
    <StyledEditorWrapper className={className}>
      <EditorWithRef ref={editorRef} initialEditType="wysiwyg" useCommandShortcut={true} onChange={handleChange} />
    </StyledEditorWrapper>
  );
});

const StyledEditorWrapper = styled.div`
  margin-top: 2.3rem;
  z-index: 2;
`;
