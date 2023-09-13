import styled from "styled-components"
import { Icon, Text } from "@ui"

export const StyledSearch = styled.div`
  position: relative;
  width: 100%;
`

export const SearchBar = styled.div`
  position: relative;

  ${Icon} {
    position: absolute;
    top: 50%;
    left: 0.5rem;
    transform: translateY(-50%);
  }

  input {
    width: 100%;
    padding: 0.6rem 0.6rem 0.6rem 2.4rem;
    color: var(--dark);
    border: 0.5px solid var(--gray);
    border-radius: 5px;
    outline: none;
  }
`

export const SearchResult = styled.ul`
  position: absolute;
  z-index: var(--z-search);
  display: none;
  width: 100%;
  list-style: none;
  background-color: var(--white);
  border: 0.5px solid var(--gray);
  border-top: none;
  border-radius: 0 0 5px 5px;
`

export const SearchItem = styled(Text).attrs({
  as: "li",
  $size: "md",
  $color: "var(--dark)",
})`
  padding: 1rem;
  cursor: pointer;
  border-bottom: 1px solid var(--light-gray);
`
