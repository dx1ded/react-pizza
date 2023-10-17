import styled from "styled-components"
import breakpoints from "@breakpoints"

export const StyledAuthMethod = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 0;

  button {
    padding: 2rem;
    cursor: pointer;
    background-color: var(--light-gray);
    border: none;
    border-radius: 10px;

    img {
      display: block;
      max-width: 7rem;
      margin: 0 auto 1rem;

      @media ${breakpoints.device.xl} {
        max-width: 5rem;
      }

      @media ${breakpoints.device.sm} {
        max-width: 3.5rem;
      }
    }

    @media ${breakpoints.device.xl} {
      padding: 1.3rem;
    }

    @media ${breakpoints.device.sm} {
      padding: 0.7rem;
    }
  }

  @media ${breakpoints.device.md} {
    gap: 1rem;
  }

  @media ${breakpoints.device.sm} {
    grid-template-columns: 1fr;
  }
`
