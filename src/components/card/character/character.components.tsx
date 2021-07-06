import { FC } from "react";
import { StyledCardCharacter } from "./character.styles";
import Image from "next/image";

interface Props {
  name: string;
  imgURL: string;
}

const CardCharacter: FC<Props> = ({ name, imgURL, ...restProps }) => {
  return (
    <StyledCardCharacter>
      <Image alt={name} src={imgURL} width={92} height={92} />
      <p>{name}</p>
    </StyledCardCharacter>
  );
};

export default CardCharacter;
