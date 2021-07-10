import { IPokemon } from "@interfaces";
import { IMyPokemonsState } from "./MyPokemons.types";

export const catchPokemon = (
  pokemon: IPokemon,
  state: IMyPokemonsState
): IMyPokemonsState => {
  return { ...state };
};

export const releasePokemon = (
  pokemon: IPokemon,
  state: IMyPokemonsState
): IMyPokemonsState => {
  return { ...state };
};
