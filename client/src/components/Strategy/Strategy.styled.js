import styled, { keyframes } from "styled-components"
import { Button, Heading, Icon } from "@ui"

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

export const StyledStrategy = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 18rem;
`

export const StrategyProgress = styled.div`
  display: flex;
  gap: 1rem;
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
  margin-bottom: 1rem;
`

export const StrategyWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  & > * {
    margin: auto 0;
    animation: ${fadeInLeft};
    animation-duration: 0.5s;
  }
`

export const StrategyNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  margin-top: auto;

  ${Button} {
    width: 3.5rem;
    height: 3.5rem;
    border-width: 1.5px;
    border-radius: 100%;

    ${Icon} {
      line-height: 3.5rem;
    }
  }
`
