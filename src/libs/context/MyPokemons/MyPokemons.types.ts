import { IPokemon } from "@interfaces";

export type TStatusCatchPokemon = "loading" | "error" | "success" | "idle";

export type TMyPokemonsActions =
  | { type: "CATCH_POKEMON"; payload?: IPokemon }
  | { type: "SET_CATCH_STATUS"; payload: TStatusCatchPokemon }
  | { type: "RELEASE_POKEMON"; payload: IPokemon }
  | { type: "SET_SELECTED_POKEMON"; payload: IPokemon }
  | { type: "RESET_SELECTED_POKEMON" };

export interface IMyPokemonsState {
  selectedPokemon?: IPokemon;
  myPokemons: IPokemon[];
  status: TStatusCatchPokemon;
}
