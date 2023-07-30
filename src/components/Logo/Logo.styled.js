import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const StyledLogo = styled(NavLink)`
  display: flex;
  gap: 1.125rem;
  align-items: flex-start;

  img {
    width: 2.375rem;
    height: 2.375rem;
  }

  h2 {
    margin-bottom: 0.1rem;
    text-transform: uppercase;
  }
`
