import { FC } from "react";
import {
  StyledNavigation,
  StyledBaseButton,
  StyledCatchButton,
} from "./navigation.styles";
import Link from "next/link";

interface INavigation {}

const Navigation: FC<INavigation> = () => {
  return (
    <StyledNavigation>
      <Link href="/" passHref>
        <StyledBaseButton as="a" variant="primary">
          LIST
        </StyledBaseButton>
      </Link>
      <Link href="/my-list" passHref>
        <StyledBaseButton as="a" variant="primary">
          MY LIST
        </StyledBaseButton>
      </Link>
      <StyledCatchButton variant="secondary">CATCH</StyledCatchButton>
    </StyledNavigation>
  );
};

export default Navigation;
