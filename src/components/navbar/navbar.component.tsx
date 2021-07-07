import { FC } from "react";
import { StyledNavbar } from "./navbar.styles";
import { Container } from "@comps";
import Image from "next/image";

const Navbar: FC = () => {
  return (
    <StyledNavbar>
      <Container>
        <Image src="/logo.svg" width={108} height={40} alt="Pokedex Logo" />
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
