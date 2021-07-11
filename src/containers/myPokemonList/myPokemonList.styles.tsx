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
  position: relative;

  ${mq("md")} {
    flex: 0 0 calc(100% / 3);
    min-width: calc(100% / 3);
  }

  ${mq("lg")} {
    flex: 0 0 calc(100% / 4);
    min-width: calc(100% / 4);
  }
`;

export const StyledReleaseBtn = styled.button`
  all: unset;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.6rem;
  background-color: ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.white};
  position: absolute;
  top: -0.4rem;
  right: 0.2rem;
  line-height: 0;
  text-align: center;
  pointer-events: all;
  z-index: 1;
  cursor: pointer;
`;
