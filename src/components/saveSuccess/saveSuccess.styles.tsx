import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const shakeKeyframe = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const StyledPokeBallWrapper = styled.div`
  width: 50px;
  height: 50px;
  animation: ${shakeKeyframe} 0.82s infinite
    cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
`;

export const StyledPrompWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
`;

export const StyledTitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.green};
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const StyledPromptText = styled.p`
  color: ${({ theme }) => theme.color.green};
  text-align: center;
  opacity: 0.8;

  span {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
  margin-top: 2rem;
`;
