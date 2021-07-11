export interface IOwnedPokemon {
  nickName: string;
  timeStamp: number;
}

export interface IOWnedPokemonFull extends IOwnedPokemon {
  name: string;
  id: number;
}

export interface IMyPokemons {
  id: number;
  owned: IOwnedPokemon[];
}
