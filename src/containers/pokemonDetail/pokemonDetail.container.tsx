import { FC, useContext, useEffect, useState } from "react";
import { IPokemonResp } from "@interfaces";
import {
  StyledWrapper,
  StyledDetailWrapper,
  StyledImgWrapper,
  StyledName,
  StyledChips,
  StyledTypesWrapper,
  StyledSectionTitle,
  StyledSectionWrapper,
  StyledSectionInner,
  StyledSmalName,
} from "./pokemonDetail.styles";
import {
  CardCharacter,
  CatchLoading,
  CatchSuccess,
  CatchFailed,
  SaveSuccess,
} from "@comps";
import { DispatchContext, MyPokemonsContext } from "@context";
import { useCatchPokemon } from "@hooks";
import { useRouter } from "next/router";

interface Props {
  data: IPokemonResp;
}

const PokeminDetail: FC<Props> = ({ data: { pokemon } }) => {
  const [nickName, setNickName] = useState("");
  const { push, query } = useRouter();
  const { catchStatus } = useContext(MyPokemonsContext);
  const { sprites, name, types, moves } = pokemon;
  const { addToMyList, setIdle } = useCatchPokemon(pokemon);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    dispatch({ type: "SET_SELECTED_POKEMON", payload: pokemon });
  }, [pokemon, dispatch]);

  const onSave = (nickName: string) => {
    addToMyList(nickName);
    setNickName(nickName);
  };

  return (
    <StyledWrapper>
      <CatchLoading loading={catchStatus === "loading"} />
      <CatchSuccess
        success={catchStatus === "success"}
        name={pokemon.name}
        onSave={onSave}
        onCancel={setIdle}
      />
      <CatchFailed
        failed={catchStatus === "error"}
        name={pokemon.name}
        onBack={setIdle}
      />
      <SaveSuccess
        saved={catchStatus === "saved"}
        onGoToMyList={() => push("/my-list")}
        onBack={setIdle}
        name={pokemon.name}
        nickName={nickName}
      />

      {catchStatus === "idle" && (
        <StyledDetailWrapper>
          <StyledImgWrapper>
            <CardCharacter imgURL={sprites.front_default} />
          </StyledImgWrapper>
          <StyledName>{name}</StyledName>
          <StyledTypesWrapper>
            {types.map(({ type }) => (
              <StyledChips key={`type-${type.name}`}>{type.name}</StyledChips>
            ))}
          </StyledTypesWrapper>
          {typeof query.nickname !== "undefined" && (
            <StyledSectionWrapper>
              <StyledSectionTitle>
                Nickname: {query.nickname}
              </StyledSectionTitle>
            </StyledSectionWrapper>
          )}
          <StyledSectionWrapper>
            <StyledSectionTitle>Moves</StyledSectionTitle>
            <StyledSectionInner>
              {moves.map(({ move }) => (
                <StyledChips key={`type-${move.name}`}>{move.name}</StyledChips>
              ))}
            </StyledSectionInner>
          </StyledSectionWrapper>
        </StyledDetailWrapper>
      )}
    </StyledWrapper>
  );
};

export default PokeminDetail;
