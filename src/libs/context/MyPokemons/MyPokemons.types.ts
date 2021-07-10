import { IPokemon } from "@interfaces";

export type TMyPokemonsActions =
  | { type: "CATCH_POKEMON"; payload: IPokemon }
  | { type: "RELEASE_POKEMON"; payload: IPokemon };

export type TStatusCatchPokemon = "loading" | "error" | "success" | "idle";

export interface IMyPokemonsState {
  myPokemons: IPokemon[];
  status: TStatusCatchPokemon;
}
