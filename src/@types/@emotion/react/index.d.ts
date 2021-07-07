import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      brandLighten: string;
      brandLight: string;
      brand: string;
      brandDark: string;
      brandDarken: string;
      white: string;
    };
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
