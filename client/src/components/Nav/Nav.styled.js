import styled from "styled-components"
import breakpoints from "@breakpoints"
import { Icon } from "@ui"

export const StyledNav = styled.nav`
  position: relative;

  ul {
    display: flex;
    gap: 1rem;
    align-items: center;
    list-style: none;

    @media ${breakpoints.device.xl} {
      gap: 0.7rem;
    }
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;

    ${Icon} {
      @media ${breakpoints.device.xl} {
        font-size: 1.3rem;
      }
    }
  }
`
