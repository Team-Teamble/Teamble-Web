import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { progressBarCSS } from "../utils/progress";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    
    body {
        font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
            Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 62.5%;
        
    }


    * {
        transition: ${createTransitionQuery()};
    }

    input, button, select, textarea, optgroup, option {
        font-family: inherit;
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
    }

    ${progressBarCSS}
`;

function createTransitionQuery() {
  const properties = ["color", "background-color", "border-color"];

  return properties.map((prop) => `${prop} 0.3s`).join(", ");
}
