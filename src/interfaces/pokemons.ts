export interface IPokemonBase {
  id: number;
  url: string;
  name: string;
  image: string;
}

export interface IPokemons {
  count: number;
  next: string;
  previous: string;
  nextOffset: number;
  prevOffset: number;
  status: boolean;
  message: string;
  results: IPokemonBase[];
}

export interface IPokemonsResp {
  pokemons: IPokemons;
}
