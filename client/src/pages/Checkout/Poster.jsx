import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { Button, Heading } from "@ui"
import breakpoints from "@breakpoints"

const StyledPoster = styled.div`
  text-align: center;

  img {
    max-width: 25rem;
    margin-bottom: 0.5rem;

    @media ${breakpoints.device.xl} {
      max-width: 20rem;
    }

    @media ${breakpoints.device.lg} {
      max-width: 15rem;
    }
  }

  ${Heading} {
    margin-bottom: 1.5rem;

    @media ${breakpoints.device.xl} {
      margin-bottom: 1rem;
    }

    @media ${breakpoints.device.lg} {
      font-size: 1.25rem;
    }
  }

  ${Button} {
    padding: 0.7rem 1.5rem;
    font-weight: 700;
    text-decoration: none;

    @media ${breakpoints.device.xl} {
      padding: 0.6rem 1.3rem;
      font-size: 0.875rem;
    }
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
