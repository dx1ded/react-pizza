import styled from "styled-components"
import { Text } from "@ui"

export const StyledOrderDetails = styled.div`
  & > ${Text} {
    display: flex;
    justify-content: space-between;

    &:not(:last-of-type) {
      margin-bottom: 1.5rem;
    }
  }
`

export const OrderDetailsHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const OrderDetailsTable = styled.div`
  margin-bottom: 2rem;

  table {
    width: 100%;
    font-size: 0.875rem;
    text-align: left;
    border-collapse: collapse;
  }

  thead {
    background-color: var(--light-gray);
  }

  th,
  td {
    padding: 1rem 0.7rem;

    &:nth-child(4) {
      text-align: center;
    }
  }
`
