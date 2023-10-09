import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { Button, Heading } from "@ui"

const StyledPoster = styled.div`
  text-align: center;

  img {
    max-width: 25rem;
    margin-bottom: 0.5rem;
  }

  ${Heading} {
    margin-bottom: 1.5rem;
  }

  ${Button} {
    padding: 0.7rem 1.5rem;
    font-weight: 700;
    text-decoration: none;
  }
`

export function Poster({ image, title, buttonText, to }) {
  return (
    <StyledPoster>
      <img src={image} alt="Illustation" />
      <Heading $size="1.5rem">{title}</Heading>
      <Button as={NavLink} $type="primary" to={to}>
        {buttonText}
      </Button>
    </StyledPoster>
  )
}
