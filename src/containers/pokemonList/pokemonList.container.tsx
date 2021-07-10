import { FC } from "react";
import { IPokemonBase } from "@interfaces";
import { StyledListWrapper, StyledListItem } from "./pokemonList.styles";
import { CardCharacter } from "@comps";
import Link from "next/link";

interface Props {
  data: IPokemonBase[];
}

const PokemonList: FC<Props> = ({ data }) => {
  return (
    <StyledListWrapper>
      {data.map(({ name, image }, idx) => (
        <Link href={`detail/${name}`} key={idx} passHref>
          <StyledListItem as="a">
            <CardCharacter name={name} imgURL={image} catches="0" />
          </StyledListItem>
        </Link>
      ))}
    </StyledListWrapper>
  );
};

export default PokemonList;
