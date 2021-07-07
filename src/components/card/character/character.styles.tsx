import styled from "@emotion/styled";
import Image from "next/image";

export const StyledCardCharacter = styled.div`
  width: 100%;
  padding: 0 0.3rem;
  background-color: ${(props) => props.theme.color.brandDarken};
  margin-bottom: 3rem;
  box-shadow: 0 -0.6rem 0 -0.3rem ${(props) => props.theme.color.brandDarken},
    0 0.6rem 0 -0.3rem ${(props) => props.theme.color.brandDarken},
    0 -1.2rem 0 -0.6rem ${(props) => props.theme.color.brandDarken},
    0 1.2rem 0 -0.6rem ${(props) => props.theme.color.brandDarken};
`;

export const StyledOuter = styled.div`
  padding: 0.3rem;
  background-color: ${(props) => props.theme.color.brandLight};
  box-shadow: 0 -0.6rem 0 -0.3rem ${(props) => props.theme.color.brandLight},
    0 0.6rem 0 -0.3rem ${(props) => props.theme.color.brandLight};
`;

export const StyledInner = styled.div`
  padding: 0 0.3rem;
  background-color: ${(props) => props.theme.color.brandLighten};
  box-shadow: 0 -0.6rem 0 -0.3rem ${(props) => props.theme.color.brandLighten},
    0 0.6rem 0 -0.3rem ${(props) => props.theme.color.brandLighten};
  display: flex;
  justify-content: center;
`;

export const StyledTitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  letter-spacing: 0.2rem;
  color: ${(props) => props.theme.color.white};
`;

export const StyledCatches = styled.p`
  font-size: 0.5rem;
  text-align: center;
  color: ${(props) => props.theme.color.white};
  opacity: 0.7;
  margin-left: 0.5rem;
`;

export const StyledCardFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const StyledMeta = styled.div`
  padding: 2rem 0 1rem;
`;
