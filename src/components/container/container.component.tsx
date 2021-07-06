import { FC } from "react";
import { StyledContainer } from "./container.styles";

const Container: FC = ({ children, ...restProps }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
