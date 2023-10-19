import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { Heading, Text } from "@ui"
import breakpoints from "@breakpoints"

export const StyledLogo = styled(NavLink)`
  display: flex;
  gap: 1.125rem;
  align-items: flex-start;
  text-decoration: none;

  img {
    width: 2.375rem;
    height: 2.375rem;

    @media ${breakpoints.device.xl} {
      width: 1.8rem;
      height: 1.8rem;
    }

    @media (width <= 50em) {
      width: 1.6rem;
      height: 1.6rem;
    }
  }

  ${Heading} {
    text-transform: uppercase;

    @media ${breakpoints.device.xl} {
      font-size: 1.3rem;
    }

    @media (width <= 50em) {
      margin-bottom: 0;
    }
  }

  @media ${breakpoints.device.xl} {
    gap: 0.8rem;
  }
`
