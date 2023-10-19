import styled, { keyframes } from "styled-components"
import { Button, Text, Icon } from "@ui"
import { NavLink } from "react-router-dom"
import breakpoints from "@breakpoints"
import { StyledLoader } from "../Loader/Loader.styled"

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const CartIcon = styled.div`
  position: relative;

  ${Text} {
    position: absolute;
    right: -0.2rem;
    bottom: 0;
    width: 0.9rem;
    height: 0.9rem;
    line-height: 0.9rem;
    text-align: center;
    pointer-events: none;
    background-color: var(--primary);
    border-radius: 100%;

    @media ${breakpoints.device.xl} {
      right: -0.1rem;
    }
  }

  ${Icon} {
    @media ${breakpoints.device.xl} {
      font-size: 1.2rem;
    }
  }
`

export const CartPrice = styled(Text)`
  position: absolute;
  visibility: hidden;
  opacity: 0;
`

export const StyledCartButton = styled(Button).attrs({ as: NavLink })`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--black);
  text-decoration: none;
  background-color: transparent;
  border: 0;
  transition: width 0.3s ease-in-out;

  ${StyledLoader} {
    visibility: hidden;
    transform: none;
  }

  &:hover {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 8rem;
    height: 3rem;
    padding: 0 1.2rem;
    color: var(--white);
    background-color: var(--primary);

    ${StyledLoader} {
      position: static;
      visibility: visible;
      animation: ${fadeIn};
      animation-duration: 0.3s;
      animation-delay: 0.3s;
      animation-fill-mode: both;
    }

    ${CartPrice} {
      position: static;
      visibility: visible;
      animation: ${fadeIn};
      animation-duration: 0.3s;
      animation-delay: 0.3s;
      animation-fill-mode: both;

      @media ${breakpoints.device.xl} {
        font-size: 0.7rem;
      }
    }

    ${CartIcon} {
      display: flex;
      align-items: center;
      animation: ${fadeIn};
      animation-duration: 0.3s;
      animation-delay: 0.3s;
      animation-fill-mode: both;

      &::before {
        position: absolute;
        left: -0.8rem;
        display: block;
        width: 1px;
        height: 100%;
        content: "";
        background-color: var(--white);
      }

      ${Icon} {
        margin-right: 0.3rem;
        font-size: 1rem;

        @media ${breakpoints.device.xl} {
          font-size: 0.9rem;
        }
      }

      ${Text} {
        position: static;
        width: auto;
        height: auto;
        font-size: 0.9rem;

        @media ${breakpoints.device.xl} {
          font-size: 0.8rem;
        }

        @media ${breakpoints.device.xl} {
          font-size: 0.7rem;
        }
      }
    }

    @media ${breakpoints.device.xl} {
      width: 7rem;
      height: 2.5rem;
    }

    @media ${breakpoints.device.lg} {
      width: 6rem;
      height: 1.6rem;
      padding: 0 0.8rem;
    }
  }
`
