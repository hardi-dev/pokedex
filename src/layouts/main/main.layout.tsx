import { FC } from "react";
import { StyledMainLayout, StyledLayoutWrap } from "./main.styles";
import { Navbar, Wrapper } from "@comps";

const MainLayout: FC = ({ children, ...restProps }) => {
  return (
    <StyledLayoutWrap>
      <Navbar />
      <StyledMainLayout {...restProps}>
        <Wrapper>{children}</Wrapper>
      </StyledMainLayout>
    </StyledLayoutWrap>
  );
};

export default MainLayout;
