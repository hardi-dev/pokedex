import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mq } from "@utils";
import { color } from "@theme";

type TBtnVariant = "solid" | "outlined";

interface IBtnProps {
  variant?: TBtnVariant;
  disabled?: boolean;
}

const colorByVariant = (variant?: TBtnVariant) => {
  return {
    color: variant === "outlined" ? color.green : color.greenDark,
    bg: variant === "outlined" ? "transparent" : color.green,
  };
};

const StyledButton = styled.a<IBtnProps>`
  all: unset;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.8rem;
  color: ${({ variant }) => colorByVariant(variant).color};
  cursor: pointer;
  background-color: ${({ variant }) => colorByVariant(variant).bg};
  border: 2px solid ${(props) => props.theme.color.green};
  position: relative;
  padding: 0.8rem 1.5rem;

  ${mq("lg")} {
    padding: 0.5rem 2rem;
  }
`;

export default StyledButton;
