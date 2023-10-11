import styled from "styled-components"
import { Text } from "@ui"

export const StyledOrderDetails = styled.div`
  & > ${Text} {
    display: flex;
    justify-content: space-between;

    &:not(:last-of-type) {
      padding-bottom: 1rem;
      margin-bottom: 1rem;
      border-bottom: 1px solid var(--light-gray);
    }

    span {
      font-size: 0.875rem;
      font-weight: 400;
    }
  }
`

export const OrderDetailsHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const OrderDetailsTable = styled.div`
  margin-bottom: 2.5rem;

  table {
    width: 100%;
    font-size: 0.875rem;
    text-align: left;
    border-collapse: collapse;
  }

  thead {
    color: var(--white);
    background-color: var(--primary);
  }

  th,
  td {
    padding: 1rem 0.7rem;

    &:nth-child(4),
    &:nth-child(5) {
      text-align: center;
    }
  }

  td {
    border-bottom: 1px solid var(--light-gray);
  }
`
