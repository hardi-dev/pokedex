import { FC, useContext, Fragment, useState, useEffect } from "react";
import { IOWnedPokemonFull, IOwnedPokemon } from "@interfaces";
import {
  StyledListWrapper,
  StyledListItem,
  StyledReleaseBtn,
} from "./myPokemonList.styles";
import { CardCharacter } from "@comps";
import Link from "next/link";
import { MyPokemonsContext, DispatchContext } from "@context";

const MyPokemonList: FC = () => {
  const { myPokemons } = useContext(MyPokemonsContext);
  const dispatch = useContext(DispatchContext);

  const handleOnRelease = (pokemon: IOWnedPokemonFull) => {
    dispatch({ type: "RELEASE_POKEMON", payload: pokemon });
  };

  return (
    <StyledListWrapper>
      {Object.keys(myPokemons).length === 0 && (
        <p>You don&apos;t have pokemons yet, please catch one</p>
      )}

      {Object.entries(myPokemons).map(([key, pokemons], idx) => (
        <Fragment key={idx}>
          {pokemons.owned.map((pokemon) => (
            <StyledListItem key={`pokemon-${pokemon.nickName}`}>
              <StyledReleaseBtn
                onClick={() =>
                  handleOnRelease({
                    name: key,
                    id: pokemons.id,
                    ...pokemon,
                  })
                }
              >
                X
              </StyledReleaseBtn>
              <Link
                href={`detail/${key}`}
                key={`pokemon-${pokemon.timeStamp}`}
                passHref
              >
                <a>
                  <CardCharacter
                    name={pokemon.nickName}
                    imgURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons.id}.png`}
                    nickName={key}
                  />
                </a>
              </Link>
            </StyledListItem>
          ))}
        </Fragment>
      ))}
    </StyledListWrapper>
  );
};

export default MyPokemonList;
