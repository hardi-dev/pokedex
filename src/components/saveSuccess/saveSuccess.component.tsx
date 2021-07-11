import { FC } from "react";
import Image from "next/image";
import {
  StyledWrapper,
  StyledPokeBallWrapper,
  StyledPrompWrapper,
  StyledTitle,
  StyledPromptText,
  StyledButtonGroup,
} from "./saveSuccess.styles";
import { PromptButton } from "@comps";

interface ISaveSuccessProps {
  saved: boolean;
  name: string;
  nickName: string;
  onBack: () => void;
  onGoToMyList: () => void;
}

const SaveSuccess: FC<ISaveSuccessProps> = ({
  name,
  nickName,
  saved,
  onBack,
  onGoToMyList,
}) => {
  if (!saved) {
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
        <StyledTitle>Yeayy!</StyledTitle>
        <StyledPromptText>
          <span>{name} </span>was save to your list as <span>{nickName}</span>
        </StyledPromptText>
        <StyledButtonGroup>
          <PromptButton onClick={onBack} variant="outlined">
            Go Back
          </PromptButton>
          <PromptButton onClick={onGoToMyList}>Go to My List</PromptButton>
        </StyledButtonGroup>
      </StyledPrompWrapper>
    </StyledWrapper>
  );
};

export default SaveSuccess;
