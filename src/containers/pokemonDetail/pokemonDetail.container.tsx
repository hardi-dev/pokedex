import { FC } from "react";
import { IPokemonResp } from "@interfaces";
import {
  StyledWrapper,
  StyledImgWrapper,
  StyledName,
  StyledChips,
  StyledTypesWrapper,
  StyledSectionTitle,
  StyledSectionWrapper,
  StyledSectionInner,
} from "./pokemonDetail.styles";
import { CardCharacter } from "@comps";
import Link from "next/link";

interface Props {
  data: IPokemonResp;
}

const PokeminDetail: FC<Props> = ({
  data: {
    pokemon: { sprites, name, types, moves },
  },
}) => {
  console.log("types", types[0].type);

  return (
    <StyledWrapper>
      <StyledImgWrapper>
        <CardCharacter imgURL={sprites.front_default} />
      </StyledImgWrapper>
      <StyledName>{name}</StyledName>
      <StyledTypesWrapper>
        {types.map(({ type }) => (
          <StyledChips key={`type-${type.name}`}>{type.name}</StyledChips>
        ))}
      </StyledTypesWrapper>
      <StyledSectionWrapper>
        <StyledSectionTitle>Moves</StyledSectionTitle>
        <StyledSectionInner>
          {moves.map(({ move }) => (
            <StyledChips key={`type-${move.name}`}>{move.name}</StyledChips>
          ))}
        </StyledSectionInner>
      </StyledSectionWrapper>
    </StyledWrapper>
  );
};

export default PokeminDetail;
