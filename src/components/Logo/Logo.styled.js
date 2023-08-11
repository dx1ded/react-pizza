import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { Heading } from "@ui"

export const StyledLogo = styled(NavLink)`
  display: inline-flex;
  gap: 1.125rem;
  align-items: flex-start;
  text-decoration: none;

  img {
    width: 2.375rem;
    height: 2.375rem;
  }

  ${Heading} {
    text-transform: uppercase;
  }
`
