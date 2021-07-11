import { FC, useState, useEffect } from "react";
import Image from "next/image";
import {
  StyledWrapper,
  StyledPokeBallWrapper,
  StyledPrompWrapper,
  StyledTitle,
  StyledPromptText,
  StyledTextInput,
  StyledButtonGroup,
  StyledPromptTextHelper,
} from "./catchSuccess.styles";
import { PromptButton } from "@comps";

interface ICatchSuccessProps {
  success: boolean;
  name: string;
  onSave: (name: string) => void;
  onCancel: () => void;
}

const CatchSuccess: FC<ICatchSuccessProps> = ({
  success,
  name,
  onSave,
  onCancel,
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  if (!success) {
    return null;
  }

  const handleOnSave = () => {
    if (value.length === 0) {
      setError(true);
    } else {
      onSave(value);
    }
  };

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
          Gotcha, <span>{name}</span> swas caught!
        </StyledTitle>
        <StyledPromptText>Give him a nickname</StyledPromptText>
        <StyledTextInput autoFocus onChange={(e) => setValue(e.target.value)} />
        {error && (
          <StyledPromptTextHelper>
            Ouch! Please don&apos;t leave him nameless
          </StyledPromptTextHelper>
        )}
        <StyledButtonGroup>
          <PromptButton onClick={onCancel} variant="outlined">
            Cancel
          </PromptButton>
          <PromptButton onClick={handleOnSave}>Save</PromptButton>
        </StyledButtonGroup>
      </StyledPrompWrapper>
    </StyledWrapper>
  );
};

export default CatchSuccess;
