import {
  IPokemon,
  IMyPokemons,
  IOwnedPokemon,
  IOWnedPokemonFull,
} from "@interfaces";

export interface IMyPokemonParams {
  pokemon: IPokemon;
  owned: IOwnedPokemon;
}

export type TStatusCatchPokemon =
  | "loading"
  | "error"
  | "success"
  | "idle"
  | "saved";

export type TMyPokemonsActions =
  | { type: "CATCH_POKEMON"; payload?: IMyPokemonParams }
  | { type: "SET_CATCH_STATUS"; payload: TStatusCatchPokemon }
  | { type: "RELEASE_POKEMON"; payload: IOWnedPokemonFull }
  | { type: "SET_SELECTED_POKEMON"; payload: IPokemon }
  | { type: "RESET_SELECTED_POKEMON" };

export interface IMyPokemonsState {
  selectedPokemon?: IPokemon;
  myPokemons: { [key: string]: IMyPokemons };
  catchStatus: TStatusCatchPokemon;
}
