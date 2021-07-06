import { FC } from "react";
import { StyledNavbar } from "./navbar.styles";
import { Container } from "@comps/index";

const Navbar: FC = () => {
  return (
    <StyledNavbar>
      <Container>Pokemon</Container>
    </StyledNavbar>
  );
};

export default Navbar;
