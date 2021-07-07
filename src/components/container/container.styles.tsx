import styled from "@emotion/styled";
import { mq } from "@utils";

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;

  ${mq("md")} {
    max-width: ${(props) => props.theme.breakpoints.md}px;
  }

  ${mq("lg")} {
    max-width: ${(props) => props.theme.breakpoints.lg}px;
  }

  ${mq("xl")} {
    max-width: ${(props) => props.theme.breakpoints.xl}px;
  }
`;
