import { FC } from "react";
import {
  StyledLayoutWrap,
  StyledContainer,
  StyledPanel,
  StyledScreen,
  StyledHeader,
  StyledNavigationContainer,
} from "./main.styles";
import Image from "next/image";
import { Navigation } from "@comps";

const MainLayout: FC = ({ children, ...restProps }) => {
  return (
    <StyledLayoutWrap>
      <StyledContainer>
        <StyledPanel>
          <StyledHeader>
            <Image src="/logo.svg" width={95} height={35} alt="Pokedex Logo" />
          </StyledHeader>
          <StyledScreen>{children}</StyledScreen>
          <StyledNavigationContainer>
            <Navigation />
          </StyledNavigationContainer>
        </StyledPanel>
      </StyledContainer>
    </StyledLayoutWrap>
  );
};

export default MainLayout;
