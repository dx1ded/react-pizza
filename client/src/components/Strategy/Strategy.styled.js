import styled, { keyframes } from "styled-components"
import { Heading } from "@ui"

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-3rem);
  }
  
  to {
    opacity: 1;
    transform: none;
  }
`

export const StyledStrategy = styled.div``

export const StrategyProgress = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 2rem;

  button {
    flex: 1;
    height: 0.25rem;
    cursor: pointer;
    background-color: var(--light-gray);
    border: none;
    border-radius: 4px;

    &.active {
      background-color: var(--primary);
    }
  }
`

export const StrategyTitle = styled(Heading)`
  margin-bottom: 2rem;

  & + * {
    animation: ${fadeInLeft};
    animation-duration: 0.5s;
  }
`
