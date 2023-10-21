import styled from "styled-components"
import { Container, Heading, Icon } from "@ui"
import { StyledPagination } from "@components/Pagination/Pagination.styled"
import breakpoints from "@breakpoints"

export const StyledOrders = styled.section`
  ${Container} {
    & > ${Heading} {
      @media ${breakpoints.device.md} {
        margin-bottom: 1rem;
        font-size: 1.25rem;
      }
    }
  }

  table {
    --table-radius: 6px;

    width: 100%;
    border-collapse: collapse;
    box-shadow: var(--shade-1);
  }

  /* Table radius */

  th:first-child {
    border-top-left-radius: var(--table-radius);
  }

  th:last-child {
    border-top-right-radius: var(--table-radius);
  }

  tr:last-child td:first-child {
    border-bottom-left-radius: var(--table-radius);
  }

  tr:last-child td:last-child {
    border-bottom-right-radius: var(--table-radius);
  }

  /* - */

  thead {
    text-align: left;
  }

  tr {
    width: 100%;

    @media ${breakpoints.device.lg} {
      font-size: 0.875rem;
    }

    @media ${breakpoints.device.md} {
      font-size: 0.75rem;
    }
  }

  th,
  td {
    padding: 1.2rem;
    font-size: 0.9375rem;

    @media ${breakpoints.device.lg} {
      padding: 1rem;
    }

    @media ${breakpoints.device.md} {
      padding: 0.8rem;
    }

    @media (width <= 28.75em) {
      padding: 0.8rem 0.5rem;
    }

    @media ${breakpoints.device.md} {
      font-size: 0.75rem;
    }

    @media ${breakpoints.device.sm} {
      font-size: 0.65rem;
    }
  }

  th {
    font-weight: 400;
    color: var(--white);
    background-color: var(--primary);
  }

  td {
    background-color: var(--light-gray);

    button {
      width: 1.8rem;
      height: 1.8rem;
      color: var(--primary);
      cursor: pointer;
      border: 1px solid currentcolor;
      border-radius: 100%;

      ${Icon} {
        vertical-align: middle;

        @media ${breakpoints.device.lg} {
          font-size: 1.1rem;
        }

        @media ${breakpoints.device.md} {
          font-size: 0.9rem;
        }
      }

      @media ${breakpoints.device.lg} {
        width: 1.6rem;
        height: 1.6rem;
      }

      @media ${breakpoints.device.md} {
        width: 1.2rem;
        height: 1.2rem;
      }
    }

    &:nth-child(3) {
      max-width: 10rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      @media ${breakpoints.device.sm} {
        max-width: 7rem;
      }
    }
  }

  th:nth-child(2),
  td:nth-child(2) {
    @media (width <= 28.75em) {
      display: none;
    }
  }

  th:nth-child(5),
  td:nth-child(5) {
    justify-content: center;
  }

  ${StyledPagination} {
    display: flex;
    justify-content: center;
    margin-top: 2.5rem;

    @media ${breakpoints.device.lg} {
      margin-top: 1.5rem;
    }
  }
`
