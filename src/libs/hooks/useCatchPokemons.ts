import { useEffect, useContext, useState } from "react";
import { IPokemon, IMyPokemon } from "@interfaces";
import {
  DispatchContext,
  MyPokemonsContext,
  TStatusCatchPokemon,
} from "@context";
import { useRouter } from "next/router";

export const useCatchPokemon = (pokemon?: IPokemon) => {
  const { pathname } = useRouter();
  const dispatch = useContext(DispatchContext);
  const { myPokemons, catchStatus } = useContext(MyPokemonsContext);

  const randomBoolean = () => Math.random() < 0.5;

  const catchPokemon = async () => {
    if (catchStatus === "loading" || pathname !== "/detail/[name]") return;

    dispatch({ type: "SET_CATCH_STATUS", payload: "loading" });

    // add Delay
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const wasCaught = randomBoolean();

    dispatch({
      type: "SET_CATCH_STATUS",
      payload: wasCaught ? "success" : "error",
    });
  };

  const addToMyList = (nickName: string) => {
    if (typeof pokemon !== "undefined") {
      dispatch({
        type: "CATCH_POKEMON",
        payload: { name: pokemon.name, nickName },
      });
    }
  };

  const setIdle = () => {
    dispatch({ type: "SET_CATCH_STATUS", payload: "idle" });
  };

  useEffect(() => {
    console.log("test", catchStatus);
  }, [catchStatus]);

  return {
    catchPokemon,
    addToMyList,
    setIdle,
  };
};
