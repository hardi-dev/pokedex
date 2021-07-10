import "@emotion/react";

declare module "@emotion/react" {
  export interface TColor {
    brandLighten: string;
    brandLight: string;
    brand: string;
    brandDark: string;
    brandDarken: string;
    white: string;
    primaryLight: string;
    primary: string;
    primaryDark: string;
    black: string;
    blue: string;
    blueDark: string;
    red: string;
    redDark: string;
    green: string;
    greenDark: string;
    greenDarken: string;
  }
  export interface Theme {
    color: TColor;
    breakpoints: {
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    fonts: {
      body: string;
    };
  }
}
