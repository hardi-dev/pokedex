import { Global, css } from "@emotion/react";
import theme from "@src/libs/theme/theme";

const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      @font-face {
        font-family: "Pixelation";
        src: url("/fonts/Pixelation.woff2") format("woff2"),
          url("/fonts/Pixelation.woff") format("woff");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      html,
      body {
        font-family: "Pixelation", -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Arial, "Helvetica Neue", sans-serif;
        background-color: ${theme.color.primary};
        height: 100%;
        font-size: 16px;
        line-height: 1.2;
      }

      #__next {
        height: 100%;
      }
    `}
  />
);

export default GlobalStyle;
