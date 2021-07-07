import styled from "@emotion/styled";
import { mq } from "@utils";

const StyledWrapper = styled.div`
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  padding-top: 2rem;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: ${(props) => props.theme.color.white};

  ${mq("lg")} {
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
    padding-top: 4rem;
  }
`;

export default StyledWrapper;
