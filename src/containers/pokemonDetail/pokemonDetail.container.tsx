import { FC, useContext, useEffect } from "react";
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
import { DispatchContext } from "@context";
import Link from "next/link";

interface Props {
  data: IPokemonResp;
}

const PokeminDetail: FC<Props> = ({ data: { pokemon } }) => {
  const dispatch = useContext(DispatchContext);
  const { sprites, name, types, moves } = pokemon;

  useEffect(() => {
    dispatch({ type: "SET_SELECTED_POKEMON", payload: pokemon });
  });

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
