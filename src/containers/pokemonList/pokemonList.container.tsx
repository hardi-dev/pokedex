import { FC } from "react";
import { IPokemonBase } from "@interfaces";
import { StyledListWrapper, StyledListItem } from "./pokemonList.styles";
import { CardCharacter } from "@comps";

interface Props {
  data: IPokemonBase[];
}

const PokemonList: FC<Props> = ({ data }) => {
  return (
    <StyledListWrapper>
      {data.map((pokemon, idx) => (
        <StyledListItem key={idx}>
          <CardCharacter name={pokemon.name} imgURL={pokemon.image} />
        </StyledListItem>
      ))}
    </StyledListWrapper>
  );
};

export default PokemonList;
