import { Theme, TColor } from "@emotion/react";

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const color: TColor = {
  brandLighten: "#81EDF9",
  brandLight: "#20aab9",
  brand: "#46C3FD",
  brandDark: "#3BB3EA",
  brandDarken: "#06505d",
  white: "#FFF",
  primaryLight: "#FCD06D",
  primary: "#F1BA40",
  primaryDark: "#A77E29",
  black: "#000001",
  blue: "#2F6EB5",
  blueDark: "#205591",
  red: "#E84926",
  redDark: "#9D2315",
};

const theme: Theme = {
  color,
  breakpoints,
  fonts: {
    body: "'Pixelation', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, 'Helvetica Neue', sans-serif",
  },
};

export default theme;
