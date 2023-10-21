import styled from "styled-components"
import { Heading } from "@ui"
import breakpoints from "@breakpoints"

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

      @media ${breakpoints.device.lg} {
        margin-bottom: 0.3rem;
      }
    }

    @media ${breakpoints.device.xl} {
      padding: 1rem;
    }

    @media ${breakpoints.device.lg} {
      padding: 0.6rem 0.8rem;
    }
  }

  @media ${breakpoints.device.xl} {
    gap: 1rem;
  }

  @media ${breakpoints.device.lg} {
    gap: 0.7rem;
  }

  @media ${breakpoints.device.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${breakpoints.device.xs} {
    grid-template-columns: 1fr;
  }
`
