import { FC, useContext, Fragment, useState, useEffect } from "react";
import { IOWnedPokemonFull, IOwnedPokemon } from "@interfaces";
import { StyledListWrapper, StyledListItem } from "./myPokemonList.styles";
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
            <Link
              href={`detail/${key}`}
              key={`pokemon-${pokemon.timeStamp}`}
              passHref
            >
              <StyledListItem as="a">
                <CardCharacter
                  name={pokemon.nickName}
                  imgURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons.id}.png`}
                  nickName={key}
                  onRelease={() =>
                    handleOnRelease({
                      name: key,
                      id: pokemons.id,
                      ...pokemon,
                    })
                  }
                  isMine
                />
              </StyledListItem>
            </Link>
          ))}
        </Fragment>
      ))}
    </StyledListWrapper>
  );
};

export default MyPokemonList;
