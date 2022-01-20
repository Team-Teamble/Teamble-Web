import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { css } from "styled-components";
import { teambleColors } from "../styles/color";

export function installProgressBar() {
  const progress = new ProgressBar({
    size: 2,
    color: teambleColors.purple,
    className: "global-progress-bar",
    delay: 100,
  });

  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routeChangeComplete", progress.finish);
  Router.events.on("routeChangeError", progress.finish);
}

export const progressBarCSS = css`
  .global-progress-bar {
    z-index: 100;
  }
`;
