import { FC } from "react";
import { MainLayout } from "@layouts";
import { PokemonList } from "@containers";
import { Container } from "@comps";
const MyList: FC = () => {
  return (
    <MainLayout>
      <Container>
        <h2>My List</h2>
      </Container>
    </MainLayout>
  );
};

export default MyList;
