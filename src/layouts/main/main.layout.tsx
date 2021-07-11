import { FC, useContext, useEffect } from "react";
import {
  StyledLayoutWrap,
  StyledContainer,
  StyledPanel,
  StyledScreen,
  StyledHeader,
  StyledScreenInner,
  StyledNavigationContainer,
  StyledScrollerInner,
} from "./main.styles";
import Image from "next/image";
import { Scroller } from "@comps";
import { Navigation } from "@containers";
import { DispatchContext, MyPokemonsContext } from "@context";
import { useRouter } from "next/router";
import { useCatchPokemon } from "@hooks";

const MainLayout: FC = ({ children }) => {
  const { pathname } = useRouter();
  const dispatch = useContext(DispatchContext);
  const { selectedPokemon } = useContext(MyPokemonsContext);
  const { catchPokemon } = useCatchPokemon(selectedPokemon);

  useEffect(() => {
    dispatch({ type: "RESET_SELECTED_POKEMON" });
    dispatch({ type: "SET_CATCH_STATUS", payload: "idle" });
  }, [dispatch, pathname]);

  return (
    <StyledLayoutWrap>
      <StyledContainer>
        <StyledPanel>
          <StyledHeader>
            <Image src="/logo.svg" width={95} height={35} alt="Pokedex Logo" />
          </StyledHeader>
          <StyledScreen>
            <StyledScreenInner>
              <Scroller>
                <StyledScrollerInner>{children}</StyledScrollerInner>
              </Scroller>
            </StyledScreenInner>
          </StyledScreen>
          <StyledNavigationContainer>
            <Navigation onCatch={catchPokemon} />
          </StyledNavigationContainer>
        </StyledPanel>
      </StyledContainer>
    </StyledLayoutWrap>
  );
};

export default MainLayout;
