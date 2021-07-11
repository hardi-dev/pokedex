import { FC } from "react";
import {
  StyledCardCharacter,
  StyledOuter,
  StyledInner,
  StyledTitle,
  StyledMeta,
  StyledCatches,
  StyledCardFooter,
  StyledCover,
} from "./character.styles";
import Image from "next/image";

interface Props {
  name?: string;
  imgURL: string;
  catches?: string;
  nickName?: string;
}

const CardCharacter: FC<Props> = ({
  name,
  catches,
  imgURL,
  nickName,
  ...restProps
}) => {
  return (
    <StyledCardCharacter {...restProps}>
      <StyledOuter>
        <StyledInner>
          <Image
            alt={name}
            src={imgURL}
            width={92}
            height={92}
            data-testid="cover"
          />
        </StyledInner>
      </StyledOuter>
      {(name || catches || nickName) && (
        <StyledMeta>
          {name && <StyledTitle data-testid="name">{name}</StyledTitle>}
          {typeof catches !== "undefined" && (
            <StyledCardFooter>
              <Image
                src={`/icon-pokemon-${
                  parseInt(catches) > 0 ? "ball" : "ball-flat"
                }.svg`}
                width={16}
                height={16}
                alt="Catches"
                data-testid="pokemon-ball"
              />
              <StyledCatches data-testid="catches-count">
                {catches} Catches
              </StyledCatches>
            </StyledCardFooter>
          )}
          {nickName && (
            <StyledCardFooter>
              <StyledCatches data-testid="nickname">{nickName}</StyledCatches>
            </StyledCardFooter>
          )}
        </StyledMeta>
      )}
    </StyledCardCharacter>
  );
};

export default CardCharacter;
