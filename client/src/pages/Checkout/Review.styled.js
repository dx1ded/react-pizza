import styled from "styled-components"
import { Button, Heading, Text } from "@ui"
import breakpoints from "@breakpoints"

export const StyledReview = styled.div`
  ${Button} {
    padding: 0.7rem 1.3rem;
    margin-top: 2.5rem;
    font-weight: 700;

    @media ${breakpoints.device.lg} {
      padding: 0.6rem 1rem;
      margin-top: 2rem;
      font-size: 0.875rem;
    }

    @media ${breakpoints.device.sm} {
      padding: 0.5rem 0.8rem;
      margin-top: 1.5rem;
      font-size: 0.8rem;
    }
  }
`

export const ReviewSection = styled.section`
  &:not(:last-of-type) {
    margin-bottom: 2rem;

    @media ${breakpoints.device.md} {
      margin-bottom: 1.5rem;
    }
  }

  ${Heading} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: right;

    span:first-child {
      flex: 1;
      margin: 0 1rem;
      border-bottom: 1px dashed var(--black);

      @media ${breakpoints.device.md} {
        margin: 0 0.8rem;
      }

      @media ${breakpoints.device.sm} {
        margin: 0 0.5rem;
      }
    }

    ${Text} {
      @media ${breakpoints.device.sm} {
        max-width: 9.5rem;
      }
    }

    @media ${breakpoints.device.md} {
      font-size: 1rem;
    }

    @media ${breakpoints.device.sm} {
      font-size: 0.9rem;
    }
  }

  table {
    width: 100%;
    text-align: left;

    @media ${breakpoints.device.xl} {
      font-size: 0.8rem;
    }
  }

  thead {
    background-color: var(--light-gray);
  }

  tr {
    display: grid;
    grid-template-columns: 4rem 1fr 0.5fr 0.5fr 0.5fr 0.5fr;
    gap: 1rem;
    align-items: center;
    padding: 0.8rem 0;

    @media ${breakpoints.device.md} {
      grid-template-columns: 2rem 1fr 0.5fr 0.5fr 0.5fr 0.5fr;
    }

    @media ${breakpoints.device.xs} {
      gap: 0.5rem;
    }
  }
`

export const StyledTableItem = styled.tr`
  border-bottom: 1px solid var(--light-gray);

  img {
    width: 100%;
  }
`
