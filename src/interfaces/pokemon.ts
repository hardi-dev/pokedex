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

export interface Pokemon {
  id: number;
  name: string;
  sprites: Sprites;
  moves: Move[];
  types: Type[];
}

export interface IPokemonResp {
  pokemon: Pokemon;
}
