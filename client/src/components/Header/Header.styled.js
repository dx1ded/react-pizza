import styled from "styled-components"
import { Container, Heading, Text } from "@ui"
import { StyledSearch } from "@components/Search/Search.styled"
import { StyledNav } from "@components/Nav/Nav.styled"
import breakpoints from "@breakpoints"
import { StyledLogo } from "../Logo/Logo.styled"

export const StyledHeader = styled.header`
  ${Container} {
    display: grid;
    grid-template-columns: 1fr ${(props) => props.$hasSearch && "30rem"} 1fr;
    align-items: center;

    @media (width <= 73.75em) {
      grid-template-columns: 1fr ${(props) => props.$hasSearch && "22rem"} 1fr;
    }

    @media ${breakpoints.device.xl} {
      grid-template-columns: 1fr ${(props) => props.$hasSearch && "18rem"} 1fr;
    }

    @media (width <= 50em) {
      grid-template-columns: 1fr ${(props) => props.$hasSearch && "14rem"} 1fr;
    }

    @media ${breakpoints.device.lg} {
      display: flex;
      justify-content: space-between;
    }
  }

  ${StyledLogo} {
    ${Heading}, ${Text} {
      @media ${breakpoints.device.lg} {
        display: none;
      }
    }
  }

  ${StyledSearch} {
    justify-self: center;

    @media ${breakpoints.device.lg} {
      display: none;
    }
  }

  ${StyledNav} {
    justify-self: end;
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const DivisionLine = styled.div`
  height: 2px;
  margin-top: 2.5rem;
  background-color: var(--light-gray);

  @media ${breakpoints.device.xl} {
    margin-top: 2rem;
  }
`
