import { FC } from "react";
import Image from "next/image";
import {
  StyledWrapper,
  StyledPokeBallWrapper,
  StyledPrompWrapper,
  StyledTitle,
  StyledPromptText,
  StyledButtonGroup,
} from "./catchFailed.styles";
import { PromptButton } from "@comps";

interface ICatchFailedProps {
  failed: boolean;
  name: string;
  onBack: () => void;
}

const CatchFailed: FC<ICatchFailedProps> = ({ failed, name, onBack }) => {
  if (!failed) {
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
      <StyledPrompWrapper>
        <StyledTitle>
          Oh no!, the wild <span>{name}</span> fled!
        </StyledTitle>
        <StyledPromptText>Check list for other Pokemon</StyledPromptText>
        <StyledButtonGroup>
          <PromptButton onClick={onBack}>Go Back</PromptButton>
        </StyledButtonGroup>
      </StyledPrompWrapper>
    </StyledWrapper>
  );
};

export default CatchFailed;
