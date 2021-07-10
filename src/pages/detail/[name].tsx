import { FC, useEffect } from "react";
import { GetServerSideProps } from "next";
import { MainLayout } from "@layouts";
import { PokemonDetail as PokemonDetailContainer } from "@containers";
import { Container, CardCharacter } from "@comps";
import { ApolloQueryResult } from "@apollo/client";
import { IPokemonResp } from "@interfaces";
import { usePokemon, PokemonQuery } from "@gql/hooks";
import { initializeApollo } from "@gql/helper";
import { useInfiniteScroll } from "@hooks";
import { useRouter } from "next/router";

interface Props {
  pokemons: ApolloQueryResult<IPokemonResp>;
}

const PokemonDetail: FC<Props> = () => {
  const { query } = useRouter();
  const { data, loading, error } = usePokemon({ name: query.name as string });

  return (
    <MainLayout>
      <Container>
        {loading && <p>Loading</p>}
        {!loading && typeof data !== "undefined" && (
          <PokemonDetailContainer data={data} />
        )}
      </Container>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: PokemonQuery,
    variables: { name: query.name },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default PokemonDetail;
