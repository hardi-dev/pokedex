import { FC, useContext } from "react";
import { IPokemonBase, IOwnedPokemon } from "@interfaces";
import {
  StyledListWrapper,
  StyledListItem,
  LoadMoreWrapper,
  LoadMoreLoading,
} from "./pokemonList.styles";
import { CardCharacter, PromptButton } from "@comps";
import Link from "next/link";
import { MyPokemonsContext } from "@context";

interface Props {
  data: IPokemonBase[];
  fetchMore: () => void;
  loading?: boolean;
}

const PokemonList: FC<Props> = ({ data, fetchMore, loading }) => {
  const { myPokemons } = useContext(MyPokemonsContext);

  const getCatchesCount = (name: string): string => {
    return String(
      typeof myPokemons[name] !== "undefined"
        ? myPokemons[name].owned.length
        : 0
    );
  };

  return (
    <>
      <StyledListWrapper>
        {data.map(({ name, image }, idx) => (
          <Link href={`detail/${name}`} key={idx} passHref>
            <StyledListItem as="a">
              <CardCharacter
                name={name}
                imgURL={image}
                catches={getCatchesCount(name)}
              />
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
