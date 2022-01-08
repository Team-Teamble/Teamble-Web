import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
            Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 62.5%;
    }

    input, button, select, textarea, optgroup, option {
        font-family: inherit;
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
    }
`;
