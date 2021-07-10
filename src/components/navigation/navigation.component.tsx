import { FC } from "react";
import {
  StyledNavigation,
  StyledBaseButton,
  StyledCatchButton,
} from "./navigation.styles";

interface INavigation {}

const Navigation: FC<INavigation> = () => {
  return (
    <StyledNavigation>
      <StyledBaseButton variant="primary">LIST</StyledBaseButton>
      <StyledBaseButton variant="primary">MY LIST</StyledBaseButton>
      <StyledCatchButton variant="secondary">CATCH</StyledCatchButton>
    </StyledNavigation>
  );
};

export default Navigation;
