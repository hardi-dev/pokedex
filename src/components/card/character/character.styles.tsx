import styled from "@emotion/styled";
import Image from "next/image";

export const StyledCardCharacter = styled.div`
  position: relative;
  width: 100%;
  padding: 0.6rem 0.9rem;
  background-color: ${(props) => props.theme.color.green};
  margin-bottom: 3rem;
  box-shadow: 0 -0.6rem 0 -0.3rem ${(props) => props.theme.color.green},
    0 0.6rem 0 -0.3rem ${(props) => props.theme.color.green},
    0 -1.2rem 0 -0.6rem ${(props) => props.theme.color.green},
    0 1.2rem 0 -0.6rem ${(props) => props.theme.color.green};
`;

export const StyledOuter = styled.div`
  padding: 0.3rem;
  background-color: ${(props) => props.theme.color.greenDark};
  box-shadow: 0 -0.6rem 0 -0.3rem ${(props) => props.theme.color.greenDark},
    0 0.6rem 0 -0.3rem ${(props) => props.theme.color.greenDark};
`;

export const StyledInner = styled.div`
  padding: 0 0.3rem;
  background-color: ${(props) => props.theme.color.greenDark};
  box-shadow: 0 -0.6rem 0 -0.3rem ${(props) => props.theme.color.greenDark},
    0 0.6rem 0 -0.3rem ${(props) => props.theme.color.greenDark};
  display: flex;
  justify-content: center;
`;

export const StyledCover = styled.div`
  padding: 0 0.3rem;
  background-color: ${(props) => props.theme.color.blue};
  box-shadow: 0 -0.6rem 0 -0.3rem ${(props) => props.theme.color.blue},
    0 0.6rem 0 -0.3rem ${(props) => props.theme.color.blue};
  display: flex;
  justify-content: center;
`;

export const StyledTitle = styled.p`
  font-size: 0.8rem;
  text-align: center;
  letter-spacing: 0.2rem;
  color: ${(props) => props.theme.color.greenDark};
`;

export const StyledCatches = styled.p`
  font-size: 0.5rem;
  text-align: center;
  color: ${(props) => props.theme.color.greenDark};
`;

export const StyledCardFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;

  > div {
    margin-right: 0.5rem !important;
  }
`;

export const StyledMeta = styled.div`
  padding: 1.5rem 0 0;
`;
