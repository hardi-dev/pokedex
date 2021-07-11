import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mq } from "@utils";
import { color } from "@theme";

type TBtnVariant = "primary" | "secondary";
interface IBtnProps {
  variant?: TBtnVariant;
  disabled?: boolean;
}

const colorByVariant = (variant?: TBtnVariant) => {
  return {
    light: variant === "secondary" ? color.red : color.primary,
    dark: variant === "secondary" ? color.redDark : color.primaryDark,
  };
};

const StyledButton = styled.a<IBtnProps>`
  all: unset;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  color: ${({ variant }) => colorByVariant(variant).dark};
  cursor: pointer;
  transition: all 0.12s ease-in-out;
  background-color: ${({ variant }) => colorByVariant(variant).light};
  border: 2px solid ${(props) => props.theme.color.black};
  position: relative;
  border-radius: 4px;
  box-shadow: inset 0px 2px 0px rgba(255, 255, 255, 0.2);
  padding: 0.8rem 1.5rem;
  text-align: center;

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
    box-shadow: inset 0 -5px 0 ${({ variant }) => colorByVariant(variant).dark};
    z-index: 3;
  }

  &:hover:not(:disabled) {
    color: ${({ theme: { color } }) => color.white};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export default StyledButton;
