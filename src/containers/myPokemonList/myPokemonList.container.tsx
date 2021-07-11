import { FC, useContext } from "react";
import { IMyPokemon } from "@interfaces";
import { StyledListWrapper, StyledListItem } from "./myPokemonList.styles";
import { CardCharacter } from "@comps";
import Link from "next/link";
import { MyPokemonsContext, DispatchContext } from "@context";

const MyPokemonList: FC = () => {
  const { myPokemons } = useContext(MyPokemonsContext);
  const dispatch = useContext(DispatchContext);

  const handleOnRelease = (pokemon: IMyPokemon) => {
    dispatch({ type: "RELEASE_POKEMON", payload: pokemon });
  };

  return (
    <StyledListWrapper>
      {myPokemons.length === 0 && (
        <p>You don&apos;t have pokemons yet, please catch one</p>
      )}

      {myPokemons.map(({ name, id, nickName }, idx) => (
        <Link href={`detail/${name}`} key={idx} passHref>
          <StyledListItem as="a">
            <CardCharacter
              name={nickName}
              imgURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              nickName={name}
              onRelease={() => handleOnRelease(myPokemons[idx])}
              isMine
            />
          </StyledListItem>
        </Link>
      ))}
    </StyledListWrapper>
  );
};

export default MyPokemonList;
