import { IPokemon, IMyPokemon } from "@interfaces";
import { IMyPokemonsState } from "./MyPokemons.types";

export const catchPokemon = (
  state: IMyPokemonsState,
  pokemon?: IMyPokemon
): IMyPokemonsState => {
  if (typeof pokemon === "undefined") {
    return { ...state };
  }

  const currentList = [...state.myPokemons];
  return {
    ...state,
    catchStatus: "saved",
    myPokemons: [...currentList, pokemon],
  };
};

export const releasePokemon = (
  state: IMyPokemonsState,
  pokemon: IMyPokemon
): IMyPokemonsState => {
  const filteredMyPokemons = state.myPokemons.filter(
    (myPokemon) => myPokemon.nickName != pokemon.nickName
  );
  return { ...state, myPokemons: filteredMyPokemons };
};

export const setSelectedPokemon = (
  state: IMyPokemonsState,
  pokemon: IPokemon
): IMyPokemonsState => {
  return { ...state, selectedPokemon: pokemon };
};

export const resetSelectedPokeon = (
  state: IMyPokemonsState
): IMyPokemonsState => {
  return { ...state, selectedPokemon: undefined };
};
