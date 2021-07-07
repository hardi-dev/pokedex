import { gql, ApolloQueryResult } from "@apollo/client";
import { client } from "../helper";
import { IPokemonsResp } from "@interfaces";

const query = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      nextOffset
      prevOffset
      status
      message
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

export const getPokemons = async ({ limit = 20, offset = 1 }: IVariables) => {
  return await client.query({ query, variables: { limit, offset } });
};
