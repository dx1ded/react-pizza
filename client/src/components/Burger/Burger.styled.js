import styled from "styled-components"
import { Heading, Text } from "@ui"
import breakpoints from "@breakpoints"
import { StyledLogo } from "../Logo/Logo.styled"
import { StyledSearch } from "../Search/Search.styled"

export const StyledBurger = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-burger);
  width: 14rem;
  height: 100%;
  padding: 1rem 0.5rem;
  visibility: ${(props) => (props.$isOpened ? "visible" : "hidden")};
  background-color: var(--white);
  box-shadow: var(--shade-1);
  opacity: ${(props) => (props.$isOpened ? 1 : 0)};
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  transform: ${(props) => (props.$isOpened ? "none" : "translateX(-100%)")};

  ${StyledLogo} {
    margin-bottom: 1.5rem;

    img {
      display: none;
    }

    ${Heading}, ${Text} {
      display: block;
    }
  }

  ${StyledSearch} {
    display: block;
  }
`

export const BurgerClose = styled.button`
  position: relative;
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  margin-bottom: 2rem;
  margin-left: auto;
  cursor: pointer;
  background-color: var(--white);
  border: none;
  transform: rotate(45deg);

  span {
    --thickness: 2px;

    position: absolute;
    top: 50%;
    left: 50%;
    background-color: var(--gray);
    transform: translate(-50%, -50%);

    &:nth-child(1) {
      width: 100%;
      height: var(--thickness);
    }

    &:nth-child(2) {
      width: var(--thickness);
      height: 100%;
    }
  }
`

export const StyledBurgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 1.5rem;
  height: 0.9rem;
  cursor: pointer;
  background-color: transparent;
  border: none;

  span {
    width: 100%;
    height: 2px;
    background-color: var(--dark);
  }

  @media ${breakpoints.device.lg} {
    display: flex;
  }
`
