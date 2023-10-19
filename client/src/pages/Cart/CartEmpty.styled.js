import styled from "styled-components"
import { Text, Button, Heading } from "@ui"
import breakpoints from "@breakpoints"

export const StyledCartEmpty = styled.div`
  margin-top: 6rem;
  text-align: center;

  ${Heading} {
    @media ${breakpoints.device.lg} {
      margin-bottom: 0.6rem;
    }
  }

  ${Text} {
    margin-bottom: 2.625rem;
    line-height: 1.4em;

    @media ${breakpoints.device.lg} {
      margin-bottom: 1.7rem;
    }
  }

  img {
    display: block;
    width: 100%;
    max-width: 18.75rem;
    margin: 0 auto 4.625rem;

    @media ${breakpoints.device.lg} {
      margin-bottom: 4rem;
    }

    @media ${breakpoints.device.md} {
      margin-bottom: 2.5rem;
    }
  }

  ${Button} {
    padding: 0.875rem 1.3rem;
    font-weight: 700;
    text-decoration: none;

    @media ${breakpoints.device.lg} {
      padding: 0.7rem 1.3rem;
      font-size: 0.875rem;
    }
  }

  @media ${breakpoints.device.lg} {
    margin-top: 4rem;
  }
`
