import { FC } from "react";
import { StyledMainLayout, StyledLayoutWrap } from "./main.styles";
import { Navbar } from "@comps/index";

const MainLayout: FC = ({ children, ...restProps }) => {
  return (
    <StyledLayoutWrap>
      <Navbar />
      <StyledMainLayout {...restProps}>{children}</StyledMainLayout>
    </StyledLayoutWrap>
  );
};

export default MainLayout;
