import { gql, useQuery } from "@apollo/client";
import { IPokemonsResp } from "@interfaces";

export const PokemonsQuery = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      nextOffset
      results {
        url
        name
        image
      }
    }
  }
`;

interface IVariables {
  limit?: number;
  offset?: number;
}

export const PokemonsQueryVariable: IVariables = {
  limit: 20,
  offset: 0,
};

export const usePokemons = () => {
  const {
    data,
    loading,
    error,
    fetchMore: loadMore,
    networkStatus,
  } = useQuery<IPokemonsResp, IVariables>(PokemonsQuery, {
    variables: PokemonsQueryVariable,
    notifyOnNetworkStatusChange: true,
  });

  const isFetchingMore = networkStatus === 3;

  const fetchMore = () => {
    loadMore({
      variables: {
        offset: data?.pokemons.nextOffset,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          pokemons: {
            ...fetchMoreResult.pokemons,
            results: [
              ...prev.pokemons.results,
              ...fetchMoreResult.pokemons.results,
            ],
          },
        };
      },
    });
  };

  return {
    data,
    loading,
    error,
    fetchMore,
    isFetchingMore,
  };
};
