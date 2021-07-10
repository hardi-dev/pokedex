import { IPokemon } from "@interfaces";
import { IMyPokemonsState } from "./MyPokemons.types";

export const catchPokemon = (
  state: IMyPokemonsState,
  pokemon?: IPokemon
): IMyPokemonsState => {
  if (typeof pokemon === "undefined") {
    return { ...state };
  }
  return { ...state };
};

export const releasePokemon = (
  state: IMyPokemonsState,
  pokemon: IPokemon
): IMyPokemonsState => {
  return { ...state };
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
