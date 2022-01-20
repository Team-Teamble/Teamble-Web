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

  const ref = useRef<ViewerType>(null);

  useEffect(() => {
    ref.current?.getInstance().setMarkdown(value);
    console.log(value);
  }, [value]);

  return (
    <StyledViewerWrapper className={className}>
      <ViewerWithRef ref={ref} />
    </StyledViewerWrapper>
  );
}

const StyledViewerWrapper = styled.div`
  height: 29.6rem;
  margin-top: 2.3rem;
  border: 2px solid ${teambleColors.gray};

  p {
    box-sizing: border-box;
    font-size: 18px;
    padding: 1.2em 2.1em;
    color: ${teambleColors.black};
    letter-spacing: -0.02em;
  }
`;
