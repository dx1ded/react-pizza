import styled from "styled-components"
import { Heading } from "@ui"

const StyledNotFound = styled.div`
  text-align: center;

  img {
    max-width: 30rem;
  }
`

export function NotFound() {
  return (
    <StyledNotFound>
      <img src="404-sketch.svg" alt="Woman on the 404 numbers background" />
    </StyledNotFound>
  )
}
