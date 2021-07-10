import { FC } from "react";
import {
  StyledNavigation,
  StyledBaseButton,
  StyledCatchButton,
} from "./navigation.styles";
import Link from "next/link";

interface INavigation {
  onCatch: () => void;
}

const Navigation: FC<INavigation> = ({ onCatch }) => {
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
      <StyledCatchButton variant="secondary" onClick={onCatch}>
        CATCH
      </StyledCatchButton>
    </StyledNavigation>
  );
};

export default Navigation;
