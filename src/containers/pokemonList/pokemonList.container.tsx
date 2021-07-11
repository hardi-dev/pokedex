import { FC } from "react";
import { IPokemonBase } from "@interfaces";
import {
  StyledListWrapper,
  StyledListItem,
  LoadMoreWrapper,
  LoadMoreLoading,
} from "./pokemonList.styles";
import { CardCharacter, PromptButton } from "@comps";
import Link from "next/link";

interface Props {
  data: IPokemonBase[];
  fetchMore: () => void;
  loading?: boolean;
}

const PokemonList: FC<Props> = ({ data, fetchMore, loading }) => {
  return (
    <>
      <StyledListWrapper>
        {data.map(({ name, image }, idx) => (
          <Link href={`detail/${name}`} key={idx} passHref>
            <StyledListItem as="a">
              <CardCharacter name={name} imgURL={image} catches="0" />
            </StyledListItem>
          </Link>
        ))}
      </StyledListWrapper>

      <LoadMoreWrapper>
        {loading ? (
          <LoadMoreLoading>Loading More Pokemons...</LoadMoreLoading>
        ) : (
          <PromptButton onClick={fetchMore}>Load More</PromptButton>
        )}
      </LoadMoreWrapper>
    </>
  );
};

export default PokemonList;
