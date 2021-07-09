import { gql, useQuery } from "@apollo/client";
import { IPokemonResp } from "@interfaces";

export const PokemonQuery = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

interface IVariables {
  name?: string;
}

export const usePokemon = (variables: IVariables) => {
  const { data, loading, error } = useQuery<IPokemonResp, IVariables>(
    PokemonQuery,
    {
      variables,
      notifyOnNetworkStatusChange: true,
    }
  );

  return {
    data,
    loading,
    error,
  };
};
