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
  StyledReleaseBtn,
} from "./character.styles";
import Image from "next/image";

interface Props {
  name?: string;
  imgURL: string;
  catches?: string;
  isMine?: boolean;
  nickName?: string;
  onRelease?: () => void;
}

const CardCharacter: FC<Props> = ({
  name,
  catches,
  imgURL,
  isMine,
  nickName,
  onRelease,
  ...restProps
}) => {
  const handleOnClickRelease = () => {
    onRelease && onRelease();
  };
  return (
    <StyledCardCharacter {...restProps}>
      {isMine && (
        <StyledReleaseBtn onClick={handleOnClickRelease}>X</StyledReleaseBtn>
      )}
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
