import { Global, css } from "@emotion/react";
import theme from "@src/libs/theme/theme";
import { mq } from "@utils";

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
        line-height: 1.2;
        font-size: 12px;

        ${mq("md")} {
          font-size: 14px;
        }

        ${mq("lg")} {
          font-size: 16px;
        }
      }

      #__next {
        height: 100%;
      }

      .scrollbar-track {
        background: transparent !important;
      }

      .scrollbar-thumb {
        background: ${theme.color.green} !important;
        border-radius: 0 !important;
      }
    `}
  />
);

export default GlobalStyle;
