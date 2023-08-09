import styled from "styled-components"
import { Container } from "@ui"
import { StyledSearch } from "@components/Search/Search.styled"
import { StyledNav } from "@components/Nav/Nav.styled"

export const StyledHeader = styled.header`
  ${Container} {
    display: grid;
    grid-template-columns: 1fr 30rem 1fr;
    align-items: center;
  }

  ${StyledSearch} {
    justify-self: center;
  }

  ${StyledNav} {
    justify-self: end;
  }
`

export const DivisionLine = styled.div`
  height: 2px;
  margin-top: 2.5rem;
  background-color: var(--light-gray);
`
