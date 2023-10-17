import styled, { keyframes } from "styled-components"
import { Button, Heading, Icon } from "@ui"
import breakpoints from "@breakpoints"

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

    @media ${breakpoints.device.sm} {
      height: 0.2rem;
    }
  }

  @media ${breakpoints.device.sm} {
    gap: 0.5rem;
    margin-bottom: 1.5rem;
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

      @media ${breakpoints.device.xl} {
        font-size: 1.5rem;
        line-height: 2.6rem;
      }

      @media ${breakpoints.device.sm} {
        line-height: 2.3rem;
      }
    }

    @media ${breakpoints.device.xl} {
      width: 2.6rem;
      height: 2.6rem;
    }

    @media ${breakpoints.device.sm} {
      width: 2.3rem;
      height: 2.3rem;
    }
  }
`
