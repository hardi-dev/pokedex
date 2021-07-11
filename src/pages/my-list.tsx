import { FC } from "react";
import { MainLayout } from "@layouts";
import { MyPokemonList } from "@containers";
import { Container } from "@comps";

const MyList: FC = () => {
  return (
    <MainLayout>
      <Container>
        <MyPokemonList />
      </Container>
    </MainLayout>
  );
};

export default MyList;
