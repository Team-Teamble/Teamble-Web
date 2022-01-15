import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer as ViewerType, ViewerProps } from "@toast-ui/react-editor";
import dynamic from "next/dynamic";
import { forwardRef, useEffect, useRef } from "react";
import styled from "styled-components";
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

  const ref = useRef<ViewerType>(null);

  useEffect(() => {
    ref.current?.getInstance().setMarkdown(value);
  }, [value]);

  return (
    <StyledViewerWrapper className={className}>
      <ViewerWithRef ref={ref} />
    </StyledViewerWrapper>
  );
}

const StyledViewerWrapper = styled.div`
  height: 100em;
`;
