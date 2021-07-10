import { FC, useContext, useEffect } from "react";
import {
  StyledLayoutWrap,
  StyledContainer,
  StyledPanel,
  StyledScreen,
  StyledHeader,
  StyledScreenInner,
  StyledNavigationContainer,
} from "./main.styles";
import Image from "next/image";
import { Scroller } from "@comps";
import { Navigation } from "@containers";
import { DispatchContext, MyPokemonsContext } from "@context";
import { useRouter } from "next/router";

const MainLayout: FC = ({ children }) => {
  const { pathname } = useRouter();
  const dispatch = useContext(DispatchContext);
  const { selectedPokemon } = useContext(MyPokemonsContext);

  useEffect(() => {
    dispatch({ type: "RESET_SELECTED_POKEMON" });
  }, [dispatch, pathname]);

  const handleCatch = () => {
    dispatch({ type: "SET_CATCH_STATUS", payload: "loading" });
    dispatch({ type: "CATCH_POKEMON", payload: selectedPokemon });
    console.log("selected", selectedPokemon);
  };

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
                <div>{children}</div>
              </Scroller>
            </StyledScreenInner>
          </StyledScreen>
          <StyledNavigationContainer>
            <Navigation onCatch={handleCatch} />
          </StyledNavigationContainer>
        </StyledPanel>
      </StyledContainer>
    </StyledLayoutWrap>
  );
};

export default MainLayout;
