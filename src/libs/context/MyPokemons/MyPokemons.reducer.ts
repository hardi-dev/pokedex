import { IMyPokemonsState, TMyPokemonsActions } from "./MyPokemons.types";
import {
  catchPokemon,
  releasePokemon,
  setSelectedPokemon,
  resetSelectedPokeon,
} from "./MyPokemons.action";

export const myPokemonsReducers = (
  state: IMyPokemonsState,
  action: TMyPokemonsActions
): IMyPokemonsState => {
  switch (action.type) {
    case "CATCH_POKEMON":
      return catchPokemon(state, action.payload);
    case "SET_CATCH_STATUS":
      return { ...state, catchStatus: action.payload };
    case "RELEASE_POKEMON":
      return releasePokemon(state, action.payload);
    case "SET_SELECTED_POKEMON":
      return setSelectedPokemon(state, action.payload);
    case "RESET_SELECTED_POKEMON":
      return resetSelectedPokeon(state);
    default:
      return state;
  }
};
