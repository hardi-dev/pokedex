import { IPokemon, IMyPokemons, IOWnedPokemonFull } from "@interfaces";
import { IMyPokemonsState, IMyPokemonParams } from "./MyPokemons.types";

export const catchPokemon = (
  state: IMyPokemonsState,
  data?: IMyPokemonParams
): IMyPokemonsState => {
  if (typeof data === "undefined") {
    return { ...state };
  }

  // Get All Pokemons
  let existingMyPokemons: { [key: string]: IMyPokemons } = state.myPokemons;

  let newPokemon = state.myPokemons[data.pokemon.name];

  if (typeof newPokemon !== "undefined") {
    // If Already have pokemon with same name, just push new one with differen NickName
    newPokemon.owned = [...newPokemon.owned, data.owned];
  } else {
    // Else is a new name, then make new object for this pokemonl
    console.log("test");
    existingMyPokemons = {
      ...existingMyPokemons,
      [data.pokemon.name]: {
        id: data.pokemon.id,
        owned: [data.owned],
      },
    };
  }

  return {
    ...state,
    catchStatus: "saved",
    myPokemons: existingMyPokemons,
  };
};

export const releasePokemon = (
  state: IMyPokemonsState,
  pokemon: IOWnedPokemonFull
): IMyPokemonsState => {
  // Get Previous My Pokemons State
  let prevMyPokemonsState = state.myPokemons;

  // Get Pokemons Want to release
  let releasedPokemon = prevMyPokemonsState[pokemon.name];

  // Return all nickname not want to release
  releasedPokemon.owned = releasedPokemon.owned.filter(
    (item) => item.nickName !== pokemon.nickName
  );

  // Set Released Pokemon new value
  prevMyPokemonsState[pokemon.name] = releasedPokemon;

  return { ...state, myPokemons: prevMyPokemonsState };
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
