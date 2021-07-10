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
}

const CardCharacter: FC<Props> = ({ name, catches, imgURL, ...restProps }) => {
  return (
    <StyledCardCharacter {...restProps}>
      <StyledOuter>
        <StyledInner>
          <Image alt={name} src={imgURL} width={92} height={92} />
        </StyledInner>
      </StyledOuter>
      {(name || catches) && (
        <StyledMeta>
          {name && <StyledTitle>{name}</StyledTitle>}
          {catches && (
            <StyledCardFooter>
              <Image
                src="/icon-pokemon-ball-flat.svg"
                width={16}
                height={16}
                alt="Catches"
              />
              <StyledCatches>{catches} Catches</StyledCatches>
            </StyledCardFooter>
          )}
        </StyledMeta>
      )}
    </StyledCardCharacter>
  );
};

export default CardCharacter;
