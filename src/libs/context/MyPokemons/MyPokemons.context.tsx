import { FC, createContext, useReducer } from "react";
import { IPokemon } from "@interfaces";
import { IMyPokemonsState, TMyPokemonsActions } from "./MyPokemons.types";
import { myPokemonsReducers } from "./MyPokemons.reducer";

export const initialState: IMyPokemonsState = {
  status: "idle",
  myPokemons: [],
};

const MyPokemonsContext = createContext<IMyPokemonsState>(initialState);
const DispatchContext = createContext<(action: TMyPokemonsActions) => void>(
  () => {}
);

const MyPokemonsProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(myPokemonsReducers, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <MyPokemonsContext.Provider value={state}>
        {children}
      </MyPokemonsContext.Provider>
    </DispatchContext.Provider>
  );
};

export { DispatchContext, MyPokemonsContext, MyPokemonsProvider };
