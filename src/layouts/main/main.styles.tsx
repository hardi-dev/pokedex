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

  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 1%;
    height: 99%;
    background: ${({ theme }) => theme.color.blue};
    z-index: 1;
    border-radius: 6px;
    box-shadow: inset 0px 6px 0px ${({ theme }) => theme.color.blueDark};
  }
`;

export const StyledNavigationContainer = styled.div`
  margin-top: 2rem;
`;
