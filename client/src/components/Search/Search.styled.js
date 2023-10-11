import styled from "styled-components"
import { Icon, Text } from "@ui"

export const StyledSearch = styled.div`
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
    border-radius: 10px;
    outline: none;
  }
`
