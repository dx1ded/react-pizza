import styled from "styled-components"
import breakpoints from "@breakpoints"

export const StyledPayMethod = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  button {
    padding: 1rem;
    text-align: center;
    cursor: pointer;
    background-color: var(--light-gray);
    border: none;
    border-radius: 20px;

    * {
      pointer-events: none;
    }

    img {
      display: block;
      max-width: 9.375rem;
      margin: 0 auto 0.5rem;

      @media ${breakpoints.device.xl} {
        max-width: 8rem;
        margin-bottom: 0.2rem;
      }

      @media ${breakpoints.device.lg} {
        max-width: 6rem;
        margin-bottom: 0.1rem;
      }

      @media ${breakpoints.device.sm} {
        max-width: 4rem;
      }
    }

    @media ${breakpoints.device.xl} {
      padding: 0.5rem;
    }

    @media ${breakpoints.device.sm} {
      border-radius: 10px;
    }
  }

  @media ${breakpoints.device.md} {
    gap: 0.5rem;
  }
`
