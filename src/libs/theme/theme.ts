import { Theme } from "@emotion/react";

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const color = {
  brandLighten: "#81EDF9",
  brandLight: "#20aab9",
  brand: "#46C3FD",
  brandDark: "#3BB3EA",
  brandDarken: "#06505d",
  white: "#FFF",
};

const theme: Theme = {
  color,
  breakpoints,
  fonts: {
    body: "'Pixelation', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, 'Helvetica Neue', sans-serif",
  },
};

export default theme;
