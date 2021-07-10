import { IMyPokemonsState, TMyPokemonsActions } from "./MyPokemons.types";
import { catchPokemon, releasePokemon } from "./MyPokemons.action";

export const myPokemonsReducers = (
  state: IMyPokemonsState,
  action: TMyPokemonsActions
): IMyPokemonsState => {
  switch (action.type) {
    case "CATCH_POKEMON":
      return catchPokemon(action.payload, state);
    case "RELEASE_POKEMON":
      return releasePokemon(action.payload, state);
    default:
      return state;
  }
};
