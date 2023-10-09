import styled from "styled-components"
import { Heading } from "@ui"

export const AddressList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  list-style: none;

  button {
    padding: 1.2rem;
    text-align: left;
    cursor: pointer;
    background-color: var(--light-gray);
    border: none;
    border-radius: 15px;

    * {
      pointer-events: none;
    }

    ${Heading} {
      display: block;
    }
  }
`
