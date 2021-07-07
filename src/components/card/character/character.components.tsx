import { FC } from "react";
import {
  StyledCardCharacter,
  StyledOuter,
  StyledInner,
  StyledTitle,
  StyledMeta,
  StyledCatches,
  StyledCardFooter,
} from "./character.styles";
import Image from "next/image";

interface Props {
  name: string;
  imgURL: string;
}

const CardCharacter: FC<Props> = ({ name, imgURL, ...restProps }) => {
  return (
    <StyledCardCharacter>
      <StyledOuter>
        <StyledInner>
          <Image alt={name} src={imgURL} width={92} height={92} />
        </StyledInner>
      </StyledOuter>
      <StyledMeta>
        <StyledTitle>{name}</StyledTitle>
        <StyledCardFooter>
          <Image
            src="/icon-pokemon-ball.svg"
            width={16}
            height={16}
            alt="Catches"
          />
          <StyledCatches>0 Catches</StyledCatches>
        </StyledCardFooter>
      </StyledMeta>
    </StyledCardCharacter>
  );
};

export default CardCharacter;
