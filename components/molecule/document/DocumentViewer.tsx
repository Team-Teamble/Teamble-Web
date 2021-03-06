import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer as ViewerType, ViewerProps } from "@toast-ui/react-editor";
import dynamic from "next/dynamic";
import { forwardRef, useEffect, useRef } from "react";
import styled from "styled-components";
import { teambleColors } from "../../../styles/color";
import { TuiViewerWithForwardedProps } from "./TuiWrapper";

interface ViewerPropsWithHandlers extends ViewerProps {
  onChange?(value: string): void;
}

const Viewer = dynamic<TuiViewerWithForwardedProps>(
  () => import("./TuiWrapper").then((module) => module.TuiViewerWrapper),
  { ssr: false },
);
const ViewerWithRef = forwardRef<ViewerType | undefined, ViewerPropsWithHandlers>(function ViewerWithRef(props, ref) {
  return <Viewer {...props} forwardedRef={ref as React.MutableRefObject<ViewerType>} />;
});

export interface DocumentViewerProps {
  className?: string;
  value?: string;
}

export function DocumentViewer(props: DocumentViewerProps) {
  const { className, value = "" } = props;

  const ref = useRef<{ editor: Editor | null }>({
    editor: null,
  });

  function setMarkdown() {
    ref.current.editor?.setMarkdown(value);
  }

  useEffect(() => {
    setMarkdown();
  }, [value]);

  return (
    <StyledViewerWrapper className={className}>
      <ViewerWithRef
        onLoad={(e) => {
          ref.current.editor = e;
          setMarkdown();
        }}
      />
    </StyledViewerWrapper>
  );
}

const StyledViewerWrapper = styled.div`
  margin-top: 2.3rem;
  min-height: 30rem;
  border: 2px solid ${teambleColors.gray};

  p {
    box-sizing: border-box;
    font-size: 18px;
    padding: 1.2em 2.1em;
    color: ${teambleColors.black};
    letter-spacing: -0.02em;
  }
`;
