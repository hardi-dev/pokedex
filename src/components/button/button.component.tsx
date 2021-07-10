import styled from "@emotion/styled";
import { mq } from "@utils";

const StyledButton = styled.a<{ variant: "primary" | "secondary" }>`
  all: unset;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  color: ${({ theme }) => theme.color.primaryDark};
  cursor: pointer;
  transition: all 0.12s ease-in-out;
  background-color: ${({
    theme: {
      color: { primary, red },
    },
    variant,
  }) => (variant === "primary" ? primary : red)};

  border: 2px solid ${(props) => props.theme.color.black};
  position: relative;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.primary};
  box-shadow: inset 0px 2px 0px ${({ theme }) => theme.color.primaryLight};
  padding: 0.8rem 2rem;

  ${mq("lg")} {
    padding: 0.8rem 3rem;
  }

  &:after,
  &:before {
    content: "";
    position: absolute;
    left: -2px;
    right: -2px;
    border-radius: 0 0 4px 4px;
    pointer-events: none;
  }

  &:before {
    bottom: -16px;
    height: 9px;
    background: ${({ theme }) => theme.color.primaryDark};
  }

  &:after {
    top: 4px;
    bottom: -9px;
    border-bottom: 2px solid ${({ theme }) => theme.color.black};
    border-left: 2px solid ${({ theme }) => theme.color.black};
    border-right: 2px solid ${({ theme }) => theme.color.black};
    box-shadow: inset 0 -5px 0 ${({ theme }) => theme.color.primaryDark};
    z-index: 3;
  }

  &:hover {
    color: ${({ theme: { color } }) => color.white};
  }
`;

export default StyledButton;
