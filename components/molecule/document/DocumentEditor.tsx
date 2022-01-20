import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor as EditorType, EditorProps } from "@toast-ui/react-editor";
import dynamic from "next/dynamic";
import { forwardRef, useImperativeHandle, useRef } from "react";
import styled from "styled-components";
import { TuiEditorWithForwardedProps } from "./TuiWrapper";

interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void;
}

const EditorBase = dynamic<TuiEditorWithForwardedProps>(
  () => import("./TuiWrapper").then((module) => module.TuiEditorWrapper),
  { ssr: false },
);
const EditorWithRef = forwardRef<EditorType | undefined, EditorPropsWithHandlers>(function EditorWithRef(props, ref) {
  return <EditorBase {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />;
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
        return editorRef.current.editor?.setMarkdown(markdown);
      },
      getMarkdown() {
        return editorRef.current.editor?.getMarkdown();
      },
    };
  });

  const editorRef = useRef<{ editor: Editor | null }>({ editor: null });

  function handleChange() {
    const markdown = editorRef.current.editor?.getMarkdown() ?? "";
    onChange && onChange(markdown);
  }

  function handleLoad(e: Editor) {
    editorRef.current.editor = e;
  }

  return (
    <StyledEditorWrapper className={className}>
      <EditorWithRef initialEditType="wysiwyg" useCommandShortcut={true} onChange={handleChange} onLoad={handleLoad} />
    </StyledEditorWrapper>
  );
});

const StyledEditorWrapper = styled.div`
  margin-top: 2.3rem;
  z-index: 2;
`;
