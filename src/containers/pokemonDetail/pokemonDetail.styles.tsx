import styled from "@emotion/styled";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  height: 100%;
`;

export const StyledDetailWrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledImgWrapper = styled.div`
  width: 180px;
`;

export const StyledName = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.color.green};
  text-align: center;
`;

export const StyledTypesWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;
`;

export const StyledChips = styled.span`
  font-size: 0.8rem;
  text-align: center;
  color: ${({ theme }) => theme.color.green};
  border-left: 0.2rem solid ${({ theme }) => theme.color.green};
  border-right: 0.2rem solid ${({ theme }) => theme.color.green};
  background-color: ${({ theme }) => theme.color.greenDark};
  padding: 0.2rem 0.8rem;
  margin: 0 0.2rem;
  box-shadow: 0 -0.4rem 0 -0.2rem ${({ theme }) => theme.color.green},
    0 0.4rem 0 -0.2rem ${({ theme }) => theme.color.green};
`;

export const StyledSectionTitle = styled.h2`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.green};
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  &:before {
    content: "";
    display: block;
    width: 8px;
    height: 12px;
    background: red;
    margin-right: 0.5rem;
    background: linear-gradient(90deg, #00e9b4 50%, rgba(19, 91, 91, 0) 50.35%),
      linear-gradient(270deg, #00e9b4 49.31%, rgba(19, 91, 91, 0) 49.65%),
      linear-gradient(90deg, #00e9b4 50%, rgba(19, 91, 91, 0) 50.35%);

    background-size: 12px 4px;
    background-repeat: no-repeat;
    background-position: center 0px, center 4px, center 8px;
  }
`;

export const StyledSectionWrapper = styled.div`
  margin: 2rem 0;
`;

export const StyledSectionInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.5rem;
  row-gap: 1rem;
`;

export const StyledSmalName = styled.h1`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.green};
`;
