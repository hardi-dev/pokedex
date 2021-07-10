import styled from "@emotion/styled";
import { Button } from "@comps";
import { mq } from "@utils";

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mq("sm")} {
    justify-content: flex-start;
  }
`;

export const StyledBaseButton = styled(Button)`
  &:first-of-type {
    ${mq("sm")} {
      margin-right: 1rem;
    }
  }
`;

export const StyledCatchButton = styled(Button)`
  ${mq("sm")} {
    margin-left: auto;
  }
`;
