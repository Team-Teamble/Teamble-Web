import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { LandingPageSecond } from "../organism/landing/LandingPageSecond";
import { LandingPageThird } from "../organism/landing/LandingPageThird";
import { LandingPageFourth } from "../organism/landing/LandingPageFourth";
import { LandingPage } from "../organism/landing/LandingPage";

interface LandingTemplateProps {
  header: ReactNode;
}

export default function LandingTemplate(props: LandingTemplateProps) {
  const [scrollIndex, setScrollIndex] = useState(1);

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      const deltaY = e.deltaY;
      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        if (window.scrollY >= 0 && window.scrollY < pageHeight) {
          window.scroll({ top: pageHeight, left: 0, behavior: "smooth" });
          setScrollIndex(2);
        } else if (window.scrollY >= pageHeight && window.scrollY < pageHeight * 2) {
          window.scroll({ top: pageHeight * 2, left: 0, behavior: "smooth" });
          setScrollIndex(3);
        } else if (window.scrollY >= pageHeight && window.scrollY < pageHeight * 3) {
          window.scroll({ top: pageHeight * 3, left: 0, behavior: "smooth" });
          setScrollIndex(4);
        } else if (window.scrollY >= pageHeight && window.scrollY < pageHeight * 4) {
          window.scroll({ top: pageHeight * 4, left: 0, behavior: "smooth" });
          setScrollIndex(4);
        } else {
          if (window.scrollY >= 0 && window.scrollY < pageHeight) {
            window.scroll({ top: 0, left: 0, behavior: "smooth" });
            setScrollIndex(1);
          } else if (window.scrollY >= 0 && window.scrollY < pageHeight * 2) {
            window.scroll({ top: 0, left: 0, behavior: "smooth" });
            setScrollIndex(1);
          } else if (window.scrollY >= 0 && window.scrollY < pageHeight * 3) {
            window.scroll({ top: pageHeight, left: 0, behavior: "smooth" });
            setScrollIndex(2);
          } else if (window.scrollY >= 0 && window.scrollY < pageHeight * 4) {
            window.scroll({ top: pageHeight * 2, left: 0, behavior: "smooth" });
            setScrollIndex(3);
          }
        }
      }
    };
    window.addEventListener("wheel", wheelHandler);
    return () => {
      window.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  return (
    <StyledWrapper>
      {props.header}
      <LandingPage />
      <LandingPageSecond />
      <LandingPageThird />
      <LandingPageFourth />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;
