import { FC, useEffect } from "react";
import { GetServerSideProps } from "next";
import { MainLayout } from "@layouts";
import { PokemonList } from "@containers";
import { Container } from "@comps";
import { ApolloQueryResult } from "@apollo/client";
import { IPokemonsResp } from "@interfaces";
import { usePokemons, PokemonsQuery, PokemonsQueryVariable } from "@gql/hooks";
import { initializeApollo } from "@gql/helper";
import { useInfiniteScroll } from "@hooks";

interface Props {
  pokemons: ApolloQueryResult<IPokemonsResp>;
}

const Home: FC<Props> = () => {
  const { data, loading, error, fetchMore } = usePokemons();

  // useInfiniteScroll(!loading, fetchMore);

  return (
    <MainLayout>
      <Container>
        <PokemonList data={data?.pokemons.results || []} />
      </Container>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: PokemonsQuery,
    variables: PokemonsQueryVariable,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default Home;
