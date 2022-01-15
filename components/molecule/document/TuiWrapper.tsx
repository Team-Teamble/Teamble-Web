import React from "react";
import { Editor, EditorProps, Viewer, ViewerProps } from "@toast-ui/react-editor";

export interface TuiEditorWithForwardedProps extends EditorProps {
  forwardedRef?: React.MutableRefObject<Editor>;
}

export function TuiEditorWrapper(props: TuiEditorWithForwardedProps) {
  return <Editor {...props} ref={props.forwardedRef} />;
}

export interface TuiViewerWithForwardedProps extends ViewerProps {
  forwardedRef?: React.MutableRefObject<Viewer>;
}

export function TuiViewerWrapper(props: TuiViewerWithForwardedProps) {
  return <Viewer {...props} ref={props.forwardedRef} />;
}
