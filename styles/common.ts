import { css } from "styled-components";

export const common = css`
  text-align: center;
  border: 1px solid;
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  width: 410px;
  height: 63px;
  line-height: 63px;
  font-size: 18px;
  font-weight: 500;
`;

export type Common = typeof common;
