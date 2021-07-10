import styled from "@emotion/styled";
import { mq } from "@utils";

export const StyledListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0;
`;

export const StyledListItem = styled.div`
  flex: 0 0 50%;
  padding: 0 0.5rem;
  min-width: 50%;

  ${mq("md")} {
    flex: 0 0 calc(100% / 3);
    min-width: calc(100% / 3);
  }

  ${mq("lg")} {
    flex: 0 0 calc(100% / 4);
    min-width: calc(100% / 4);
  }
`;
