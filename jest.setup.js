import { ThemeProvider } from "@emotion/react";
import theme from "./src/libs/theme/theme";
import { render } from "@testing-library/react";
import React from "react";

global.renderWithTheme = (component) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};
