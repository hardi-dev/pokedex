import styled from "@emotion/styled";
import { TColor } from "@emotion/react";

const Panel = styled.div`
  border: 2px solid ${(props) => props.theme.color.black};
  position: relative;
  padding: 0 2rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.primary};
  box-shadow: inset 0px 3px 0px ${({ theme }) => theme.color.primaryLight};

  &:after,
  &:before {
    content: "";
    position: absolute;
    left: -2px;
    right: -2px;
    border-radius: 0 0 8px 8px;
    pointer-events: none;
  }

  &:before {
    bottom: -52px;
    height: 37px;
    background: ${({ theme }) => theme.color.primaryDark};
  }

  &:after {
    top: 4px;
    bottom: -20px;
    border-bottom: 2px solid ${({ theme }) => theme.color.black};
    border-left: 2px solid ${({ theme }) => theme.color.black};
    border-right: 2px solid ${({ theme }) => theme.color.black};
    box-shadow: inset 0 -16px 0 ${({ theme }) => theme.color.primaryDark};
    z-index: 3;
  }
`;

export default Panel;
