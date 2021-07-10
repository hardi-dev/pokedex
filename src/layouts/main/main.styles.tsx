import styled from "@emotion/styled";
import { Panel, Container } from "@comps";
import { mq } from "@utils";

export const StyledLayoutWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledContainer = styled(Container)`
  height: 100%;
  padding: 4% 5% 7%;

  ${mq("md")} {
    padding: 4% 0 7%;
  }
`;

export const StyledPanel = styled(Panel)`
  height: 100%;
  min-width: ${(props) => props.theme.breakpoints.sm};
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0; ;
`;

export const StyledScreen = styled.div`
  height: 70%;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.primaryDark};
  border: 2px solid ${({ theme }) => theme.color.black};
  position: relative;

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0px;
    right: 0px;
    border-radius: 6px;
  }

  &:after {
    top: 1%;
    height: 99%;
    background: ${({ theme }) => theme.color.greenDark};
    z-index: 1;
    box-shadow: inset 0px 6px 0px ${({ theme }) => theme.color.greenDarken};
  }

  &:before {
    top: 2%;
    height: 98%;
    background: linear-gradient(
      180deg,
      rgba(19, 91, 91, 0.3) 50%,
      rgba(19, 91, 91, 0) 50%
    );
    background-size: 100% 4px;
    background-repeat: repeat-y;
    pointer-events: none;
    z-index: 20;
  }
`;

export const StyledScreenInner = styled.div`
  width: 100%;
  height: 100%;
  z-index: 4;
  position: relative;
  padding: 0.7rem 0.5rem 0;
`;

export const StyledNavigationContainer = styled.div`
  margin-top: 2rem;
`;
