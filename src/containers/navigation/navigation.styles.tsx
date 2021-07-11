import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Button } from "@comps";
import { mq } from "@utils";

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  ${mq("sm")} {
    justify-content: flex-start;
    gap: 0;
  }
`;

const ButtonStyle = css`
  flex: 1;

  ${mq("sm")} {
    flex: none;
  }
`;

export const StyledBaseButton = styled(Button)`
  ${ButtonStyle};

  &:first-of-type {
    ${mq("sm")} {
      margin-right: 1rem;
    }
  }
`;

export const StyledCatchButton = styled(Button)`
  ${ButtonStyle};

  ${mq("sm")} {
    margin-left: auto;
  }
`;
