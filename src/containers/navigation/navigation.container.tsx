import { FC, useContext } from "react";
import {
  StyledNavigation,
  StyledBaseButton,
  StyledCatchButton,
} from "./navigation.styles";
import Link from "next/link";
import { MyPokemonsContext } from "@context";
import { useRouter } from "next/router";

interface INavigation {
  onCatch: () => void;
}

const Navigation: FC<INavigation> = ({ onCatch }) => {
  const { catchStatus } = useContext(MyPokemonsContext);
  const { query } = useRouter();

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
      <StyledCatchButton
        as="button"
        variant="secondary"
        onClick={onCatch}
        disabled={
          catchStatus !== "idle" || typeof query.nickname !== "undefined"
        }
      >
        CATCH
      </StyledCatchButton>
    </StyledNavigation>
  );
};

export default Navigation;
