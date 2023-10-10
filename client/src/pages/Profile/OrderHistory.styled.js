import styled from "styled-components"
import { Icon } from "@ui"
import { StyledPagination } from "@components/Pagination/Pagination.styled"

export const StyledOrderHistory = styled.section`
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
    display: flex;
    align-items: center;
    background-color: var(--light-gray);
  }

  th,
  td {
    flex: 1;
    padding: 1.2rem;
  }

  th {
    font-weight: 400;
    color: var(--white);
    background-color: var(--primary);
  }

  td {
    font-size: 0.9375rem;

    button {
      width: 1.8rem;
      height: 1.8rem;
      color: var(--primary);
      cursor: pointer;
      border: 1px solid currentcolor;
      border-radius: 100%;

      ${Icon} {
        vertical-align: middle;
      }
    }

    &:nth-child(3) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  th:nth-child(3),
  td:nth-child(3) {
    flex: 15rem;
  }

  th:nth-child(5),
  td:nth-child(5) {
    text-align: center;
  }

  ${StyledPagination} {
    display: flex;
    justify-content: center;
    margin-top: 2.5rem;
  }
`
