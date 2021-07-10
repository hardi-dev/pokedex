export interface Sprites {
  front_default: string;
}

export interface Move {
  name: string;
}

export interface Moves {
  move: Move;
}

export interface Type {
  name: string;
}

export interface Types {
  type: Type;
}

export interface IPokemon {
  id: number;
  name: string;
  sprites: Sprites;
  moves: Moves[];
  types: Types[];
}

export interface IPokemonResp {
  pokemon: IPokemon;
}
