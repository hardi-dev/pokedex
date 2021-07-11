import { FC } from "react";
import Image from "next/image";
import { StyledWrapper, StyledPokeBallWrapper } from "./catchLoading.styles";

interface ICatchLoadingProps {
  loading?: boolean;
}

const CatchLoading: FC<ICatchLoadingProps> = ({ loading }) => {
  if (!loading) {
    return null;
  }

  return (
    <StyledWrapper>
      <StyledPokeBallWrapper>
        <Image
          src="/icon-pokemon-ball.svg"
          width={50}
          height={50}
          alt="Catch"
        />
      </StyledPokeBallWrapper>
    </StyledWrapper>
  );
};

export default CatchLoading;
