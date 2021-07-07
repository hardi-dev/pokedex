import { breakpoints } from "@theme";

export const mq = (n: keyof typeof breakpoints) => {
  return `@media (min-width: ${breakpoints[n]}px)`;
};
