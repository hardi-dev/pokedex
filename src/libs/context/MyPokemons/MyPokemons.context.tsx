import { FC, createContext, useReducer, useEffect } from "react";
import { IMyPokemonsState, TMyPokemonsActions } from "./MyPokemons.types";
import { myPokemonsReducers } from "./MyPokemons.reducer";

export const initialState: IMyPokemonsState = {
  catchStatus: "idle",
  myPokemons: {},
};

const MyPokemonsContext = createContext<IMyPokemonsState>(initialState);
const DispatchContext = createContext<(action: TMyPokemonsActions) => void>(
  () => {}
);

const MyPokemonsProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(
    myPokemonsReducers,
    initialState,
    (): IMyPokemonsState => {
      let localData: string | null = null;
      if (typeof window !== "undefined") {
        localData = localStorage.getItem("myPokemons");
      }
      return {
        catchStatus: "idle",
        myPokemons: localData ? JSON.parse(localData) : {},
      };
    }
  );

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof state.myPokemons !== "undefined"
    ) {
      localStorage.setItem("myPokemons", JSON.stringify(state.myPokemons));
    }
  }, [state]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <MyPokemonsContext.Provider value={state}>
        {children}
      </MyPokemonsContext.Provider>
    </DispatchContext.Provider>
  );
};

export { DispatchContext, MyPokemonsContext, MyPokemonsProvider };
